import React, { useEffect } from "react";
import "./nav.css";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Turn as Hamburger } from "hamburger-react";
import { HamburgerToggle } from "./HamburgerToggle";
import NavList from "./NavList";

const Navbar = ({ handler, isOpen, setIsOpen }) => {
  const location = useLocation();
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  const menuVariants = {
    menuOpen: {
      display: "flex",
      transition: {
        bounce: 0.1,
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
      y: 0,
    },
    menuClosed: { transitionEnd: { display: "none" }, y: -100 },
  };
  const logoVariants = {
    menuOpen: { opacity: 1, display: "block" },
    menuClosed: { opacity: 0, display: "none" },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      end={{ y: -100 }}
      transition={{ duration: 0.9 }}
    >
      <ul>
        {/* LOGO */}
        <li>
          {/* <Link to={"/"} className="brand_logo logo"> */}
          <AnimatePresence>
            {location.pathname === "/" ? (
              <Link to={"/"} className="brand_logo logo" key={"brand__logo"}>
                <motion.span
                  variants={logoVariants}
                  initial="menuClosed"
                  animate="menuOpen"
                  end="menuClosed"
                >
                  m.
                </motion.span>
              </Link>
            ) : (
              <Link to={"/"} className="brand_logo logo">
                <motion.span>
                  <svg
                    width="89"
                    height="40"
                    viewBox="0 0 96 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M55.37 49V49.5H55.87H67.402H67.902V49V15.799C67.902 11.1912 66.5466 7.45076 64.0289 4.86016C61.5097 2.26789 57.8821 0.884003 53.452 0.884003C47.577 0.884003 42.871 3.95532 39.2522 9.86244C37.0087 3.91106 31.9271 0.884003 26.017 0.884003C20.9535 0.884003 16.5756 3.34353 13.032 8.08035V2.128V1.628H12.532H1H0.5V2.128V49V49.5H1H12.532H13.032V49V31.795C13.032 25.1404 14.0734 20.0917 15.8127 16.7261C17.5455 13.373 19.9347 11.742 22.669 11.742C24.4826 11.742 25.7675 12.2481 26.6088 13.1908C27.4599 14.1444 27.935 15.6306 27.935 17.752V49V49.5H28.435H39.967H40.467V49V30.772C40.467 24.4928 41.5075 19.703 43.243 16.5023C44.9708 13.3161 47.3584 11.742 50.104 11.742C51.9176 11.742 53.2025 12.2481 54.0438 13.1908C54.8949 14.1444 55.37 15.6306 55.37 17.752V49ZM80.6206 47.6796C83.7919 50.8508 89.3165 50.8508 92.4877 47.6796C95.659 44.5083 95.659 38.9837 92.4877 35.8125C89.3165 32.6412 83.7919 32.6412 80.6206 35.8125C77.4494 38.9837 77.4494 44.5083 80.6206 47.6796Z"
                      stroke="var(--text-main)"
                    />
                  </svg>
                </motion.span>
              </Link>
            )}
          </AnimatePresence>
          {/* </Link> */}
        </li>

        <AnimatePresence>
          {location.pathname === "/" ? (
            <motion.li
              className="center"
              key={"home_nav"}
              variants={menuVariants}
              initial={"menuClosed"}
              animate={"menuOpen"}
              end={"menuClosed"}
            >
              Saksham <br /> Parag Agarwal
            </motion.li>
          ) : (
            ""
          )}
        </AnimatePresence>

        <motion.li>
          <div className="right_list">
            <AnimatePresence>
              {location.pathname === "/" ||
              (location.pathname !== "/" && isOpen) ? (
                <motion.button
                  key={"home_nav2"}
                  variants={menuVariants}
                  initial={"menuClosed"}
                  animate={"menuOpen"}
                  end={"menuClosed"}
                  className="theme-toggle"
                  id="theme-toggle"
                  title="Toggles light & dark"
                  aria-label="auto"
                  aria-live="polite"
                  onClick={handler}
                >
                  <svg
                    className="sun-and-moon"
                    aria-hidden="true"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <mask className="moon" id="moon-mask">
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="white"
                      />
                      <circle cx="24" cy="10" r="6" fill="black" />
                    </mask>
                    <circle
                      className="sun"
                      cx="12"
                      cy="12"
                      r="6"
                      mask="url(#moon-mask)"
                      fill="currentColor"
                    />
                    <g className="sun-beams" stroke="currentColor">
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                  </svg>
                </motion.button>
              ) : (
                ""
              )}
            </AnimatePresence>
            <motion.div
              className="nav__toggle link"
              variants={menuVariants}
              initial="menuClosed"
              exit={"menuClosed"}
              animate={"menuOpen"}
              transition={{ delay: 0.8 }}
              onClick={toggleHamburger}
            >
              <HamburgerToggle toggled={isOpen} />
            </motion.div>
          </div>
        </motion.li>
        <NavList isOpen={isOpen} setIsOpen={setIsOpen} />
      </ul>
    </motion.nav>
  );
};

export default Navbar;
