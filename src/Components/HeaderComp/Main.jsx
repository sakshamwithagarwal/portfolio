import React from "react";
import "./main.css";
import { motion } from "framer-motion";

const Main = ({ compRef }) => {
  const handleClickToScroll = () => {
    compRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const animation = {
    animate: {
      y: ["0%", "-108%", "-102%", "-208%", "-202%", "-308%", "-302%"],
    },
    transition: {
      duration: 7,
      ease: "easeInOut",
      times: [0, 0.13, 0.3333, 0.4633, 0.6666, 0.79666, 0.9999],
      repeat: Infinity,
    },
  };
  return (
    <main>
      <motion.h1
        className="heading_main"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="animated_heading_wrapper">
          <motion.span
            animate={animation.animate}
            transition={animation.transition}
          >
            Visual
          </motion.span>
          <motion.span
            animate={animation.animate}
            transition={animation.transition}
          >
            Industrial
          </motion.span>
          <motion.span
            animate={animation.animate}
            transition={animation.transition}
          >
            Interaction
          </motion.span>
          <motion.span
            animate={animation.animate}
            transition={animation.transition}
          >
            Visual
          </motion.span>
        </div>
        <div className="hero__heading-mobile">
          <div className="hero__heading_row-1">
            <motion.span
              animate={animation.animate}
              transition={animation.transition}
            >
              Visual
            </motion.span>
            <motion.span
              animate={animation.animate}
              transition={animation.transition}
            >
              Indust
            </motion.span>
            <motion.span
              animate={animation.animate}
              transition={animation.transition}
            >
              Interac
            </motion.span>
            <motion.span
              animate={animation.animate}
              transition={animation.transition}
            >
              Visual
            </motion.span>
          </div>
          <div className="hero__heading_row-2">
            <div className="hero__heading_col-1"></div>
            <div className="hero__heading_col-2">
              <motion.span
                animate={animation.animate}
                transition={animation.transition}
              >
                O.O
              </motion.span>
              <motion.span
                animate={animation.animate}
                transition={animation.transition}
              >
                rial
              </motion.span>
              <motion.span
                animate={animation.animate}
                transition={animation.transition}
              >
                tion
              </motion.span>
              <motion.span
                animate={animation.animate}
                transition={animation.transition}
              >
                O.O
              </motion.span>
            </div>
          </div>
        </div>

        <motion.div
          className="hero__subheading-wrapper"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="hero__subheading">Designer</span>
          <span className="hero__subheading-mobile">
            Design <br /> er
          </span>
        </motion.div>
      </motion.h1>
      <div className="hero__content">
        <motion.p
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          end={{ y: 500 }}
        >
          I am an Industrial and Interaction Designer who creates designs that
          are both sustainable and universal. I try to draw inspiration from
          music and comics in order to create designs that provide a harmonious
          and consistent user experience for others.
        </motion.p>
        <div className="hero__scroll_arrow" onClick={handleClickToScroll}>
          <motion.div
            className="hero__scroll-arrow-circle"
            whileHover={{ scale: [null, 1.25, 1.2] }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.35 }}
          ></motion.div>
          <motion.svg
            width="93"
            height="74"
            viewBox="0 0 93 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="link"
          >
            {/* <circle cx={0} cy={0} r={100} stroke="white" strokeWidth={1} /> */}
            <path
              d="M46.0053 0.683594V73.3168M92.2717 26.4772L46.1196 73.3167L1.23145 26.0555"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </div>
    </main>
  );
};

export default Main;
