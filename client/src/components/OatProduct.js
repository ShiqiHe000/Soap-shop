import React from "react";
import oatSoap from "../imgs/oat-product.jpg";
import smile from "../imgs/smile.jpg";
import styles from "../sass/_OatProduct.module.scss";
import descrption from "../sass/_NewProducts.module.scss";
import PriceAndQuantity from "./PriceAndQuantity";

const OatProduct = () => {
    return (
        <div className={`${styles.gradiantBg} ${styles.gridContainer}`}>
            <img src={oatSoap} alt="oat soap" className={styles.oatSoapImg} />
            <img
                src={smile}
                alt="woman's smile"
                className={styles.womanSmile}
            />
            <div
                className={`${descrption.produceDescription} ${styles.descriptionPlace}`}>
                <h3 className={descrption.subtitle}>Never be wrong with oat</h3>
                <h1 className={descrption.title}>We Love Your Smile</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    ratione adipisci doloribus, ipsa consequatur corrupti eum
                    temporibus tempora officia voluptas.
                </p>
                <PriceAndQuantity price={"19.56"} name={"Oat Series"} />
            </div>
        </div>
    );
};

export default OatProduct;
