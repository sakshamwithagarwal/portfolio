import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"
import { motion } from "framer-motion";

const Background = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      line1Ref.current,
      { height: 0 },
      { height: "100%", duration: 1.4, delay: 0.6 }
    );
    gsap.fromTo(
      line2Ref.current,
      { height: 0 },
      { height: "100%", duration: 1.4, delay: 0.8 }
    );
    gsap.fromTo(
      line3Ref.current,
      { height: 0 },
      { height: "100%", duration: 1.4, delay: 1 }
    );
    gsap.fromTo(
      circleRef.current,
      { width: 0, height: 0 },
      { width: "29.27vw", height: "29.27vw", duration: 1, delay: 1.2 }
    );
  }, []);

  return (
    <>
      <motion.div className="line-1" initial={{height: 0}} animate={{height: '100%'}} transition={{duration: 1}}></motion.div>
      <motion.div className="line-2" initial={{height: 0}} animate={{height: '100%'}} transition={{duration: 1, delay: .1}}></motion.div>
      <motion.div className="line-3" initial={{height: 0}} animate={{height: '100%'}} transition={{duration: 1, delay: .2}}></motion.div>
      <motion.div className="circle" initial={{width: 0, height: 0}} animate={{width: '29.27vw', height: '29.27vw'}} transition={{duration: 1, delay: .25}}></motion.div>
    </>
  );
};

export default Background;
