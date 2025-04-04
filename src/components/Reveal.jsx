import { useEffect, useRef } from "react";

export const Reveal = ({ children }) => {

    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([entries]) => {
            if(entries.isIntersecting)
            {
                ref.current.classList.add("active");
            }
        },{threshold: 0.2, rootMargin: "0px 0px -50px 0px"});

        if(ref.current) {
            obs.observe(ref.current);
        }
        return () => obs.disconnect();
    })

    return (
        <div ref = {ref} className="reveal">
            {children}
        </div>
    )
}