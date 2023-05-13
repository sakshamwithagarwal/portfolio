import React from "react";
import "./splash.css";
import { motion } from "framer-motion";

const Preloader = ({ theme }) => {
  const storageKey = "theme-preference";

  return (
    <motion.section
      className="preloader_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      
      <motion.img
        src={"/assets/preloader_" + theme.value + ".webp"}
        alt=""
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        exit={{
          // opacity: 0,
          // pathLength: 1,
          // transition: { duration: 0.5 },
          y: -96,
        }}
      />
    </motion.section>
  );
};

export default Preloader;
