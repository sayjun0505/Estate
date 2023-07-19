import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

interface animationProps {
  texts: string[];
  interval: number;
  className?: string;
  delay?: number;
}

const TitleAnimation: React.FC<animationProps> = (props) => {
  const effects = ["fade", "rotate", "bounce"]; // Add more effects if needed
  const [currentIndex, setCurrentIndex] = useState(0);
  const { texts, interval, delay = 0, className } = props;
  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      const interv = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, interval);
      return ()=>clearInterval(interv)
    }, delay);

    return () => clearInterval(delayTimeout);
  }, [texts.length, interval, delay]);

  const titleVariants: any = {
    fade: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0, transition: { duration: 1 } },
      exit: { opacity: 0, x: 300, transition: { duration: 0.5 } },
    },
    rotate: {
      initial: { opacity: 0, rotate: -150 },
      animate: { opacity: 1, rotate: 0, transition: { duration: 1 } },
      exit: { opacity: 0, rotate: 150, transition: { duration: 1 } },
    },
    bounce: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
      exit: { opacity: 0, y: -40, transition: { duration: 1, ease: "easeOut" } },
    },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        key={currentIndex}
        variants={titleVariants[effects[currentIndex % 3]]}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {texts[currentIndex]}
      </motion.div>
    </AnimatePresence>
  );
};

export default TitleAnimation;
