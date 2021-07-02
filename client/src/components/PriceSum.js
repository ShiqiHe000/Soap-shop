import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/ItemsSlice";
import btn from "../sass/_button.module.scss";
import styles from "../sass/_PriceSum.module.scss";

const PriceSum = () => {
    const items = useSelector(selectItems);
    const reducer = (acc, curr) => {
        return acc + Number(curr.price) * Number(curr.number);
    };

    let calcSum = items.reduce(reducer, 0).toFixed(2);

    return (
        <div className={styles.container}>
            <button className={`${btn.btn} ${btn.btnSecondary}`}>
                Check Out
            </button>
            <div>
                Total: $<span>{calcSum}</span>
            </div>
        </div>
    );
};

export default PriceSum;
