import React, { useState, useEffect } from "react";
import modal from "../sass/_modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { updateItemRedux, deleteItemRedux } from "../redux/ItemsSlice";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { updateItem, deleteItem } from "../js/requests";

const ShoppingCartItem = ({ item }) => {
    const updateMutation = useMutation(
        (itemToUpdate) => updateItem(itemToUpdate),
        {
            mutationKey: "updateItem",
        }
    );
    const deleteMutation = useMutation((itemId) => deleteItem(itemId), {
        mutationKey: "deleteItem",
    });
    const { name, number, price, _id: id } = item;
    const [editQuantity, setEditQuantity] = useState(false);
    const [itemNumber, setItemNumber] = useState(Number(number));
    const dispatch = useDispatch();
    let rightPart;

    useEffect(() => {
        setItemNumber(Number(number));
    }, [number]);

    const switchToEdit = () => {
        setEditQuantity(true);
    };

    const getPrice = () => {
        const totalPrice = Number(price) * itemNumber;
        return `$${totalPrice.toFixed(2)}`;
    };
    const handleDelete = async () => {
        try {
            await deleteMutation.mutateAsync(id);

            dispatch(deleteItemRedux(id));
        } catch (err) {
            alert("Cannot update your cart. Try later.");
            setItemNumber(Number(number));
        }
    };

    const increment = () => setItemNumber(itemNumber + 1);
    const decrement = () => {
        if (itemNumber > 0) {
            setItemNumber(itemNumber - 1);
        }
        if (itemNumber === 0) {
            // request delete
            handleDelete();
        }
    };

    const closeEdit = async () => {
        setEditQuantity(false);

        const updatedItem = {
            id,
            name,
            price,
            number: itemNumber,
        };

        // PUT to db
        try {
            await updateMutation.mutateAsync(updatedItem);
            dispatch(updateItemRedux(updatedItem));
        } catch (err) {
            alert("Cannot update your cart. Try later.");

            setItemNumber(Number(number));
        }
    };

    if (editQuantity) {
        // edit
        rightPart = (
            <div className={modal.inputField}>
                <button className={modal.btn} onClick={closeEdit}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </button>
                <div className={modal.inputGroup}>
                    <button
                        onClick={increment}
                        className={`${modal.btn} ${modal.itemBtn}`}>
                        +
                    </button>
                    <input
                        type="number"
                        value={itemNumber}
                        onChange={(e) => setItemNumber(e.target.value)}
                        className={`${modal.inputQuantity}`}
                        min="0"
                    />
                    <button
                        onClick={decrement}
                        className={`${modal.btn} ${modal.itemBtn}`}>
                        -
                    </button>
                </div>
            </div>
        );
    } else {
        rightPart = (
            <>
                <span className={modal.itemPrice}>{getPrice()}</span>
                <button
                    className={`${modal.btn} ${modal.itemBtn}`}
                    onClick={switchToEdit}>
                    {itemNumber}
                </button>
                <button className={modal.btn} onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </>
        );
    }

    return (
        <li className={modal.item}>
            <div className={modal.itemName}>{name}</div>
            <div className={modal.rightPart}>{rightPart}</div>
        </li>
    );
};

export default ShoppingCartItem;
