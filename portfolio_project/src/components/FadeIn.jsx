import { useEffect, useRef, useState } from "react";

function FadeIn({ children }) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };

    }, []);

    return (
        <div ref={elementRef} className={`fade-in ${isVisible ? "show" : ""}`}>
            {children}
        </div>

    );
}

export default FadeIn;