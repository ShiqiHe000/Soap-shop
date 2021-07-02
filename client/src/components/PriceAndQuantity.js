import React, { useState } from "react";
import btn from "../sass/_button.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
    selectItems,
    addItemRedux,
    updateItemRedux,
} from "../redux/ItemsSlice";
import Loading from "./Loading";
import { gsap } from "gsap";
import { useMutation } from "react-query";
import { addItem, updateItem } from "../js/requests";

const PriceAndQuantity = ({ price, name }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

    const updateMutation = useMutation((itemToUpdate) =>
        updateItem(itemToUpdate)
    );

    const addItemMutation = useMutation((item) => addItem(item));
    const items = useSelector(selectItems);

    let submitStatus;
    if (updateMutation.isLoading || addItemMutation.isLoading) {
        submitStatus = <Loading />;
    } else {
        submitStatus = null;
    }

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            alert("The minimum number is 1.");
        }
    };

    const btnAnimation = (e, isSuccess) => {
        const button = e.target;
        let childSpan;
        if (isSuccess) {
            childSpan = button.querySelector(`.${btn.success}`);
        } else {
            childSpan = button.querySelector(`.${btn.failed}`);
        }

        const tl = gsap.timeline();
        tl.fromTo(
            childSpan,
            {
                scale: 0,
                y: 0,
                opacity: 1,
            },
            {
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
            }
        );

        tl.to(childSpan, {
            y: -50,
            opacity: 0,
            duration: 1,
            delay: 0.5,
        });
    };

    const submitAddItem = async (e) => {
        const existedInCart = items.find((item) => item.name === name);

        if (existedInCart != null) {
            // already in cart, update
            const updatedItem = {
                ...existedInCart,
                id: existedInCart._id, 
                number: Number(existedInCart.number) + count,
            };

            try {
                await updateMutation.mutateAsync(updatedItem);
                dispatch(updateItemRedux(updatedItem));

                btnAnimation(e, true);
            } catch (err) {
                console.log("update item failed.");
                btnAnimation(e, false);
            }
        } else {
            // not in cart, post
            const newItem = { name, price, number: count };
            try {
                const res = await addItemMutation.mutateAsync(newItem);

                dispatch(addItemRedux(res));
                btnAnimation(e, true);
            } catch (err) {
                btnAnimation(e, false);
            }
        }
    };

    return (
        <div>
            <div className={btn.btnGroupPosition}>
                <div className={btn.priceAndQuantity}>
                    <span className="price">{`$${price}`}</span>
                    <div className={btn.btnGroupContainer}>
                        <button
                            className={btn.btnGroup}
                            onClick={() => increment()}>
                            +
                        </button>
                        <span>{count}</span>
                        <button
                            className={btn.btnGroup}
                            onClick={() => decrement()}>
                            -
                        </button>
                    </div>
                </div>
            </div>
            <button
                disabled={updateMutation.isLoading || addItemMutation.isLoading}
                className={`${btn.btn} ${btn.btnSecondary} ${btn.btnBlock} ${btn.succeededInfo}`}
                onClick={(e) => submitAddItem(e)}>
                Add to Cart
                {submitStatus}
                <span className={btn.success}>Succeeded!</span>
                <span className={btn.failed}>Failed...</span>
            </button>
        </div>
    );
};

export default PriceAndQuantity;
