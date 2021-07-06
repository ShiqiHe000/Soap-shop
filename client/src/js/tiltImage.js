import { gsap } from "gsap";

export const imgTilt = (img, text) => {
    const tl = gsap.timeline();
    let selector = gsap.utils.selector(img);

    const angle = 30;
    tl.fromTo(
        img,
        {
            xPercent: -100,
            opacity: 0,
        },
        {
            xPercent: 35,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
        }
    );

    tl.to(img, {
        delay: 0.25,
        rotation: angle,
        transformOrigin: "top left",
        ease: "elastic.out(1, 0.3)",
        duration: 2,
    });

    tl.to(
        selector("h1"),
        {
            rotation: -angle,
            duration: 1.5,
            ease: "elastic.out(1, 0.3)",
        },
        "-=1"
    );

    tl.to(selector("h1"), {
        scale: 1.1,
        duration: .25,
        ease: "power4.out",
    });

    tl.to(selector("h1"), {
        scale: 1,
        duration: .25,
        ease: "power4.out",
    });
    

    tl.fromTo(text, {
        y: -50, 
        opacity: 0
    }, {
        y: 0, 
        duration: 2,
        opacity: 1, 
    }, "-=.5")
};
