import React, { useEffect } from "react";
import styles from "../sass/_NewProducts.module.scss";
import PriceAndQuantity from "./PriceAndQuantity";
import roseSoap from "../imgs/pink-soap.jpg";
import { backgroundShift } from "../js/frameAnimation";

const NewRoseProduct = () => {
    useEffect(() => {
        backgroundShift(styles.imgRoseFrameContainer, styles.imgRoseFrame);
    }, []);

    return (
        <div className={`${styles.productContainer} ${styles.roseBg}`}>
            <div className={styles.imgRoseFrameContainer}>
                <span className={styles.imgRoseFrame}></span>
                <img
                    src={roseSoap}
                    alt="New rose series"
                    className={styles.imgSize}
                />
            </div>
            <div
                className={`${styles.produceDescription} ${styles.roseDescription}`}>
                <h3 className={styles.subtitle}>roses meet peaches</h3>
                <h1 className={styles.title}>Explore the Summer Fragrance</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    ratione adipisci doloribus, ipsa consequatur corrupti eum
                    temporibus tempora officia voluptas.
                </p>
                <PriceAndQuantity price={"25.89"} name={"Roase Meet Peaches"} />
            </div>
        </div>
    );
};

export default NewRoseProduct;
