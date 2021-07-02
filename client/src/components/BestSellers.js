import React, { useEffect, useRef } from "react";
import face from "../imgs/face-bestSeller.jpg";
import styles from "../sass/_BestSellers.module.scss";
import ClassicSeries from "./ClassicSeries";
import OatProduct from "./OatProduct";
import { imgMove, showTitles } from "../js/imgTransition";

const BestSellers = () => {
    const bubbleImg = useRef();
    const subTitle = useRef();
    const title = useRef();

    useEffect(() => {
        // console.log(subTitle.current);
        showTitles(subTitle.current, title.current, bubbleImg.current);

        imgMove(bubbleImg.current);
    }, []);
    return (
        <div className="container">
            <div className={styles.imgAndTextArrange}>
                <div className={styles.faceImgContainer}>
                    <div
                        className={styles.movingImg}
                        id="movingImg"
                        ref={bubbleImg}></div>
                    <img
                        src={face}
                        alt="washes face"
                        className={styles.washFaceImg}
                    />
                    <h2 className={styles.subtitle} ref={subTitle}>
                        It’s not Just Soap.
                    </h2>
                    <h1 className={styles.title} ref={title}>
                        It’s Mother Nature’s Care.
                    </h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    dignissim vestibulum libero, sed imperdiet sapien tristique
                    non. Integer a augue risus. Pellentesque sapien libero,
                    interdum a gravida sed, hendrerit rhoncus odio.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    dignissim vestibulum libero, sed imperdiet sapien tristique
                    non. Integer a augue risus. Pellentesque sapien libero,
                    interdum a gravida sed, hendrerit rhoncus odio.
                </p>
            </div>

            <ClassicSeries />
            <OatProduct />
        </div>
    );
};

export default BestSellers;
