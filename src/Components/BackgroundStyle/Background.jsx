import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Background = () => {
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
