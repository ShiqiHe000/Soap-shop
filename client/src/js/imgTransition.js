import { gsap } from "gsap";

let cursor = {
    x: 0,
    y: 0,
};

export const imgMove = (movingImg) => {
    // const movingImg = document.querySelector("#movingImg");
    // console.log(movingImg);
    document.addEventListener("mousemove", (e) => {
        cursor.x = -e.clientX * 0.1;
        cursor.y = -e.clientY * 0.1;
        movingImg.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`;
    });
};

export const showTitles = (subtitle, title, img) => {
    subtitle.innerHTML = subtitle.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
    );

    title.innerHTML = title.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
    );

    const tl = gsap.timeline();
    const subtitleLetters = gsap.utils.selector(subtitle);
    const titleLetters = gsap.utils.selector(title);
    tl.to(subtitleLetters(".letter"), {
        opacity: 1,
        y: "0",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: 0.05,
    });

    tl.to(
        titleLetters(".letter"),
        {
            opacity: 1,
            y: "0",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            stagger: 0.05,
        },
        "-=.7"
    );

    tl.to(
        img,
        {
            duration: 1.5,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            ease: "back.out(1.7)",
        },
        "-=.5"
    );

};
