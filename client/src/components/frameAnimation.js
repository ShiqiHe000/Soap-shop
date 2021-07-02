import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// the class name of the frame:
export const frameAnimationGoDown = (containerClassName, frameClassName) => {
    gsap.registerPlugin(ScrollTrigger);

    const image = `.${containerClassName}`;
    const frame = `.${frameClassName}`;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: image,
            start: "top center",
            // markers: true,
        },
    });
    tl.fromTo(
        image,
        {
            y: -50,
            x: -50,
            opacity: 0,
        },
        {
            duration: 1,
            y: 0,
            x: 0,
            opacity: 1,
        }
    );
    tl.to(frame, {
        duration: 0.5,
        delay: 0.5,
        zIndex: -1,
        top: 5,
        left: 5,
        opacity: 0.2,
    });
    tl.to(frame, {
        duration: 1,
        top: 20,
        left: 20,
        opacity: 1,
        ease: "power3",
    });
};

export const frameAnimationGoUp = (containerClassName, frameClassName) => {
    gsap.registerPlugin(ScrollTrigger);

    const image = `.${containerClassName}`;
    const frame = `.${frameClassName}`;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: image,
            start: "top bottom",
        },
    });
    tl.fromTo(
        image,
        {
            y: -50,
            x: 50,
            opacity: 0,
        },
        {
            duration: 1,
            y: 0,
            x: 0,
            opacity: 1,
        }
    );
    tl.to(frame, {
        duration: 0.5,
        delay: 0.5,
        zIndex: -1,
        top: -5,
        left: 5,
        opacity: 0.2,
    });
    tl.to(frame, {
        duration: 1,
        top: -20,
        left: 20,
        opacity: 1,
        ease: "power3",
    });
};

export const backgroundShift = (container, background) => {
    gsap.registerPlugin(ScrollTrigger);

    const image = `.${container}`;
    const frame = `.${background}`;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: image,
            start: "center bottom",
        },
    });

    tl.fromTo(
        image,
        {
            y: -50,
            x: 50,
            opacity: 0,
        },
        {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
        }
    );

    tl.to(frame, {
        duration: 1,
        top: -30,
        left: 30,
        opacity: 1,
        ease: "power3",
    });
}
