import React, { useEffect } from "react";
import newProduct1 from "../imgs/soap-new-1.jpg";
import styles from "../sass/_NewProducts.module.scss";
import PriceAndQuantity from "./PriceAndQuantity";
import { frameAnimationGoDown } from "./frameAnimation";

const NewMarbleProduct = () => {
    useEffect(() => {
        frameAnimationGoDown(styles.imgMarbleFrameContainer, styles.imgMarbleFrame);
    }, []);

    return (
        <div className={styles.productContainer}>
            <div className={styles.imgMarbleFrameContainer}>
                <span className={styles.imgMarbleFrame}></span>
                <img
                    src={newProduct1}
                    alt="New marble series"
                    className={styles.imgSize}
                />
            </div>
            <div
                className={`${styles.produceDescription} ${styles.marbleDescription}`}>
                <h3 className={styles.subtitle}>New Marble Series</h3>
                <h1 className={styles.title}>Our Designs are Never Boring</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    ratione adipisci doloribus, ipsa consequatur corrupti eum
                    temporibus tempora officia voluptas.
                </p>
                <PriceAndQuantity price={"49.99"} name={"New Marble Series"} />
            </div>
        </div>
    );
};

export default NewMarbleProduct;
