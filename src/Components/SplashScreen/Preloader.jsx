import React from "react";
import "./splash.css";
import { motion } from "framer-motion";

const Preloader = ({theme}) => {
  const storageKey = "theme-preference";

  return (
    <motion.section className="preloader_container">
      <motion.img
          src={'/assets/preloader_'+ theme.value +'.webp'}
          alt=""
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          exit={{
            opacity: 0,
            pathLength: 1,
            rotate: 0,
            transition: { duration: 0.5 },
            y: -96,
          }}
        />
    </motion.section>
  );
};

export default Preloader;
