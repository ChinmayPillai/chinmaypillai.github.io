import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props{
    children: JSX.Element;
}

export const Reveal = ({children} : Props) => {
    
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});

    const motionControls = useAnimation();

    useEffect(() => {
        if(inView){
            motionControls.start("visible");
        }
    }, [inView]);
    
    return(
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 75 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                }}
            
                initial= "hidden"
                animate={motionControls}
                transition={{ duration: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
)}