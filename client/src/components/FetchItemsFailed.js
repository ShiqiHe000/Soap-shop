import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import styles from "../sass/_FetchItemsFailed.module.scss";

const FetchItemsFailed = () => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faSadTear} />
            <span>Sorry, we failed to load your cart.</span>
        </div>
    );
};

export default FetchItemsFailed;
