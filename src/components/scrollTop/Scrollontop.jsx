import React, { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";
import "aos/dist/aos.css";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const btnRef = useRef(null);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    useEffect(() => {
        if (visible) {
            gsap.fromTo(btnRef.current, { y: -1000, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" });
        } else {
            gsap.to(btnRef.current, { y: -1000, opacity: 0, duration: 0.5, ease: "power2.in" });
        }
    }, [visible]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-6 right-10 z-50" ref={btnRef}>
            <button
                onClick={scrollToTop}
                className="relative cursor-pointer flex items-center justify-center w-12 h-12 border-2 border-[#00AFAD] rounded-full shadow-lg text-white bg-[#00AFAD] transition-all"
            >
                {visible && (
                    <span className="absolute inset-0 bg-[#00AFAD] rounded-full animate-[ping_2.5s_ease-in-out_infinite]"></span>
                )}

                <span className="relative flex items-center justify-center w-full h-full rounded-full">
                    <ArrowUp className="h-6 w-5 text-white" />
                </span>
            </button>
        </div>
    );
};

export default ScrollToTop;