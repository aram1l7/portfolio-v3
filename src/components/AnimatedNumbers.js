import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { duration: 3000 });
  const isVisible = useInView(ref);

  useEffect(() => {
    if (isVisible) {
      motionVal.set(value);
    }
  }, [isVisible, value, motionVal]);

  useEffect(() => {
    springVal.on("change", (newVal) => {
      if (ref.current && newVal.toFixed(0) <= value) {
        ref.current.textContent = newVal.toFixed(0);
      }
    });
  }, [springVal, value]);

  return <span ref={ref}></span>
};

export default AnimatedNumbers;
