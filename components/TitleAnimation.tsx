import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
interface animationProps {
  texts: string[];
  interval: number;
  className?: string;
  delay?: number;
}

const TitleAnimation: React.FC<animationProps> = (props) => {
  const effects = ["lefttoright", "up", "righttoleft"]; // Add more effects if needed
  const [currentIndex, setCurrentIndex] = useState(0);
  const { texts, interval, delay = 0, className } = props;
  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      const interv = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, interval);
      return () => clearInterval(interv);
    }, delay);

    return () => clearInterval(delayTimeout);
  }, [texts.length, interval, delay]);

  const titleVariants: any = {
    lefttoright: {
      initial: { opacity: 0, x: -200 },
      animate: { opacity: 1, x: 0, transition: { duration: 1 } },
      exit: { opacity: 0, y: -150, transition: { duration: 0.5 } },
    },
    up: {
      initial: { opacity: 0, y: 300 },
      animate: { opacity: 1, y: 0, transition: { duration: 1 } },
      exit: { opacity: 0, scale: 0.3, transition: { duration: 0.5 } },
    },
    righttoleft: {
      initial: { opacity: 0, scale: 0.3 },
      animate: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
      exit: { opacity: 0, x: -150, transition: { duration: 1, ease: "easeOut" } },
    },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.h1
        className={className}
        key={currentIndex}
        variants={titleVariants[effects[currentIndex % 3]]}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {texts[currentIndex]}
      </motion.h1>
    </AnimatePresence>
  );
};

export default TitleAnimation;
