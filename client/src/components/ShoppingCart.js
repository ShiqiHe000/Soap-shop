import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "../sass/_ShoppingCart.module.scss";
import modal from "../sass/_modal.module.scss";
import ShoppingCartItem from "./ShoppingCartItem";
import { fetchItemsRedux, selectItems } from "../redux/ItemsSlice";
import FetchItemsFailed from "./FetchItemsFailed";
import Loading from "./Loading";
import PriceSum from "./PriceSum";
import { useQuery } from "react-query";
import { fetchItems } from "../js/requests.js";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const itemsRedux = useSelector(selectItems);

    const {
        data: items,
        isLoading,
        isError,
        isSuccess,
    } = useQuery("fetchItems", fetchItems);
    const [closed, setClosed] = useState(true);

    const closeModal = () => {
        setClosed(true);
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(fetchItemsRedux(items));
        }
    }, [items, isSuccess, dispatch]);

    let content;

    if (isError) {
        // request failed
        content = <FetchItemsFailed />;
    } else if (isLoading) {
        // waiting for response
        content = (
            <div className={styles.loading}>
                <Loading />
            </div>
        );
    } else {
        // reques succeeded or redux state.items updates
        content = (
            <div className={modal.modalBody}>
                <ul>
                    {itemsRedux.map((item) => (
                        <ShoppingCartItem item={item} key={item._id} />
                    ))}
                </ul>
                <PriceSum />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <button
                className={`${styles.btn} ${styles.spin}`}
                onClick={() => setClosed(false)}>
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    className={styles.icon}
                />
            </button>
            <div
                className={`${modal.modalContainer} ${
                    closed ? "" : modal.active
                }`}>
                <div className={modal.title}>
                    <button
                        className={modal.closeBtn}
                        onClick={() => closeModal()}>
                        &times;
                    </button>
                    My Shooping Cart
                </div>
                {content}
            </div>
        </div>
    );
};

export default ShoppingCart;
