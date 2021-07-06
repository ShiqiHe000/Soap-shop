import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const oatSoapAnimation = (soap, woman) => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: soap,
            start: "top center",
        },
    });

    tl.fromTo(
        soap,
        {
            xPercent: -100,
            opacity: 0,
        },
        {
            xPercent: 0,
            ease: "back.out(1.7)",
            opacity: 1,
            duration: 2,
        },
        "start"
    );

    tl.fromTo(
        woman,
        {
            yPercent: 100,
            opacity: 0,
        },
        {
            yPercent: 0,
            ease: "back.out(1.7)",
            duration: 2,
            opacity: 1,
        },
        "start"
    );
};
