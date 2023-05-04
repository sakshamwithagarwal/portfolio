import React from "react";
import "./splash.css";
import { motion } from "framer-motion";

const Preloader = () => {
  const storageKey = "theme-preference";

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  };

  const theme = { value: getColorPreference() };

  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
  };

  const reflectPreference = () => {
    document.firstElementChild.setAttribute("data-theme", theme.value);

    document
      .querySelector("#theme-toggle")
      ?.setAttribute("aria-label", theme.value);
  };

  reflectPreference();

  window.onload = () => {
    reflectPreference();
  };
  return (
    <motion.section className="preloader_container">
      <>
        <motion.div className="line-1"></motion.div>
        <motion.div className="line-2"></motion.div>
        <motion.div className="line-3"></motion.div>
        <motion.div
          className="circle-preloader"
          animate={{
            scale: [1, 1.2, 1, 1.2, 1],
            // rotate: [0, 0, 180, 180, 0],
            borderRadius: ["50%", "50%", "50%", "50%", "50%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
        ></motion.div>
      </>
    </motion.section>
  );
};

export default Preloader;
