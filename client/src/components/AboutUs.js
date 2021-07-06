import React, { useEffect, useRef } from "react";
import styles from "../sass/_AboutUs.module.scss";
import BubbleLandingPage from "./BubbleLanding";
import { imgTilt } from "../js/tiltImage";

const AboutUs = () => {
    const titleImg = useRef();
    const text = useRef();
    
    useEffect(() => {
        new BubbleLandingPage(20);
        imgTilt(titleImg.current, text.current);
    }, []);

    return (
        <div className={`${styles.wholePage}`}>
            <div className={styles.imgContainer} ref={titleImg}>
                <h1 className={styles.title}>Who are we?</h1>
            </div>
            <div className={`container ${styles.textContainer}`} ref={text}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla minus culpa hic, numquam fuga molestias esse!
                    Architecto quidem blanditiis quod.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ducimus ex sunt ea consectetur, tempore enim suscipit natus
                    molestiae doloribus tenetur. Aperiam vero veritatis id,
                    facere enim eos necessitatibus cum ratione?
                </p>
            </div>
            <canvas id="canvas" className={styles.canvas}></canvas>
        </div>
    );
};

export default AboutUs;
