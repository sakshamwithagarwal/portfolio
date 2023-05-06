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
