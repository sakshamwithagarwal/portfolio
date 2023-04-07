import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import "./collection.css";
import { motion } from "framer-motion";
import { SimpleNav } from "../../Components";
import collectionData from "../../assets/PostersList.json";

const Collection = ({ isOpen, setIsOpen }) => {
  const [thumbnail, setThumbnail] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const thumbnailRef = useRef(null);
  const containerRef = useRef(null);
  const listRef = useRef(null);

  const variants = {
    hidden: {
      opacity: 0,
      transition: { mass: 0.1, transitionEnd: { y: -48 }, type: "spring" },
      y: -96,
    },
    visible: {
      opacity: 1,
      transition: { mass: 0.1, restDelta: 0.00001, type: "spring" },
      y: 0,
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      transition: {
        striffness: 300,
        damping: 24,
        transitionEnd: { y: -48 },
        type: "spring",
      },
      y: -96,
    },
    visible: {
      opacity: 1,
      transition: { mass: 0.1, restDelta: 0.00001, type: "spring" },
      y: 0,
    },
  };

  const parentVariants = {
    hidden: {transition: {staggerChildren: 0.05, staggerDirection: 1}},
    visible: {transition: {staggerChildren: 0.05, staggerDirection: -1}}
  }

  const thumbnailVariants = {
    selected: {
      opacity: 1,
      transition: {bounce: 0.1, duration: 0.8, restDelta: 0.00001, type: "spring"}
    },
    unselected: {
      opacity: 0,
      transition: {bounce: 0.1, duration: 0.8, restDelta: 0.00001, type: "spring"}
    }
  }
  const thumbnailIMGVariants = {
    selected: {
      scale: 1.1,
      transition: {bounce: 0.1, duration: 0.8, restDelta: 0.00001, type: "spring"}
    },
    unselected: {
      scale: 1,
      transition: {bounce: 0.1, duration: 0.8, restDelta: 0.00001, type: "spring"}
    }
  }

  // useEffect(() => {
  //   // console.log("thumbnail");
  //   gsap.fromTo(
  //     thumbnailRef.current,
  //     { scale: 0, autoAlpha: 0 },
  //     { scale: 1, autoAlpha: 1, duration: 1 }
  //   );
  //   gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1 });
  // }, [thumbnail]);

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

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  const handleMouseEnter = (thumb) => {
    setThumbnail(thumb);
  };
  const handleMouseLeave = () => {
    setThumbnail("");
  };

  (function (timer) {
    window.addEventListener("load", function () {
      var el = document.querySelector(".collection__list");
      el.addEventListener("scroll", function (e) {
        (function (el) {
          el.classList.add("scroll");
          clearTimeout(timer);
          timer = setTimeout(function () {
            el.classList.remove("scroll");
          }, 100);
        })(el);
      });
    });
  })();

  return (
    <div className="collection">
      <SimpleNav isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen ? (
        ""
      ) : (
        <motion.div className="collection__container" variants={parentVariants} animate={"visible"} initial={"hidden"} exit={"hidden"} >
          <motion.div className="collection__thumbnail" variants={variants}>
            <motion.div className="collection__thumbnail-inside" variants={thumbnailVariants} animate={thumbnail == "" ? "unselected" : "selected"} initial={"unselected"} >
              <motion.img
                src={"/assets/" + thumbnail}
                alt=""
                variants={thumbnailIMGVariants}
              />
            </motion.div>
          </motion.div>

          <motion.div className="collection__list-wrapper">
            <motion.h3
              className="collection__list-title"
              variants={variants}
            >
              Posters
            </motion.h3>
            <motion.div className="collection__list-outer">
              {collectionData && <motion.ul className="collection__list" ref={listRef}>
                {collectionData.posters.map((item, key) => (
                  <motion.li
                    className={
                      isTouched
                        ? "collection__list-item touched"
                        : "collection__list-item"
                    }
                    variants={itemVariants}
                    key={key + "-" + item.title}
                    onMouseEnter={() => handleMouseEnter(item.thumbnail)}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    <motion.div
                      style={
                        item.diffFont ? { fontFamily: item.fontFamily } : {}
                      }
                      className="hoverable"
                    >
                      {item.title}
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Collection;
