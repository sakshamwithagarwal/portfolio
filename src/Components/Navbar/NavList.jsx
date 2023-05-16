import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ListIconComp from "./ListIconComp";

const NavList = ({ isOpen, setIsOpen }) => {
  const listItem = [
    {
      title: "Home",
      sublist: [],
      url: "/",
    },
    {
      title: "Projects",
      sublist: [],
      url: "/#projects",
    },
    {
      title: "Collections",
      sublist: [
        {
          title: "Posters",
          url: "/collection",
        },
        {
          title: "3D Renders",
          url: "/collection",
        },
        {
          title: "User Interface",
          url: "/collection",
        },
      ],
    },
    {
      title: "About",
      sublist: [
        {
          title: "Instagram",
          url: "/",
        },
        {
          title: "Behance",
          url: "/",
        },
        {
          title: "LinkedIn",
          url: "/",
        },
      ],
    },
  ];
  const navListVariants = {
    close: {
      opacity: 0.5,
      transition: {
        bounce: 0.1,
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
      transitionEnd: { display: "none" },
    },
    open: { display: "block", opacity: 1 },
  };
  return (
    <div className={isOpen ? "nav__list active" : "nav__list"}>
      <ul>
        {listItem.map((item, idx) => {
          return (
            <div key={idx}>
              {item.sublist.length >= 1 ? (
                <motion.li
                  className="nav__list-item"
                  key={idx + "-" + item.title}
                  variants={navListVariants}
                  initial="close"
                  animate="open"
                  end="close"
                >
                  <ListIconComp className="icon" /> {"  "} {item.title}
                  <ul className="nav__sublist">
                    {item.sublist.map((subItem, idx_) => (
                      <Link
                        to={subItem.url}
                        key={idx_ + "-" + subItem.title}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <motion.li
                          className="nav__list-sub-item"
                          variants={navListVariants}
                          initial="close"
                          animate="open"
                          end="close"
                        >
                          <ListIconComp className="icon" /> {"  "}{" "}
                          {subItem.title}
                        </motion.li>
                      </Link>
                    ))}
                  </ul>
                </motion.li>
              ) : (
                <Link
                  to={item.url}
                  key={idx + 1 + "-" + item.title}
                  onClick={() => setIsOpen(!isOpen)}
                  variants={navListVariants}
                  initial="close"
                  animate="open"
                  end="close"
                >
                  <li className="nav__list-item">
                    <ListIconComp className="icon" /> {"  "} {item.title}
                  </li>
                </Link>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default NavList;
