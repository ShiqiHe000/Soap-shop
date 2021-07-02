import React, { useEffect } from "react";
import btn from "../sass/_button.module.scss";
import styles from "../sass/_Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import BubbleLandingPage from "./BubbleLanding";

const Home = () => {
    useEffect(() => {
        new BubbleLandingPage();
    }, []);

    return (
        <div className="container">
            <canvas id="canvas" className={styles.canvas}></canvas>
            <h1 className={styles.title}>Bubbles Wonderland</h1>
            <h3 className={styles.subtitle}>
                We have the soap that serves your skin.
            </h3>
            <button
                className={`${btn.btn} ${btn.btnPrimary} ${styles.buyButton}`}>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.arrowIcon}
                />
                Shop Now
            </button>
        </div>
    );
};

export default Home;
