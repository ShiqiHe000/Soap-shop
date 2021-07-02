import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import styles from '../sass/_Failed.module.scss'

const Failed = () => {


    return (
        <span data-failed-to-add-item className={styles.container}>
            <FontAwesomeIcon icon={faHeartBroken} />
            <span> Try it again...</span>
        </span>
    );
};

export default Failed;
