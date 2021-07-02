import React, { useEffect } from "react";
import styles from "../sass/_NewProducts.module.scss";
import PriceAndQuantity from "./PriceAndQuantity";
import classicSoap from "../imgs/classic-soap.jpg";
import { frameAnimationGoUp } from "./frameAnimation";

const ClassicSeries = () => {
    useEffect(() => {
        frameAnimationGoUp(
            styles.imgClassicFrameContainer,
            styles.imgClassicFrame
        );
    }, []);

    return (
        <div className={styles.productContainer}>
            <div className={styles.imgClassicFrameContainer}>
                <span className={styles.imgClassicFrame}></span>
                <img
                    src={classicSoap}
                    alt="Classic soap series"
                    className={styles.imgSize}
                />
            </div>
            <div
                className={`${styles.produceDescription} ${styles.classicDescription}`}>
                <h3 className={styles.subtitle}>100% NATURAL INGREDIENTS</h3>
                <h1 className={styles.title}>Classic Never Fades Away...</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    ratione adipisci doloribus, ipsa consequatur corrupti eum
                    temporibus tempora officia voluptas.
                </p>
                <PriceAndQuantity price={"35.22"} name={"Classic Series"} />
            </div>
        </div>
    );
};

export default ClassicSeries;
