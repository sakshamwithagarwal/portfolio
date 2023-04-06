import React, { useState, useContext, useRef, useEffect, useLayoutEffect } from "react";
import "./nav.css";
import "./custom-ham.css";
import ListIconComp from "./ListIconComp";
import { gsap } from "gsap"
import { Link } from "react-router-dom";

// import listIcon from "../../assets/list-icon.svg"

const SimpleNav = ({ isOpen, setIsOpen }) => {
  const navRef = useRef(null)
  const listRef = useRef()

  useEffect(() => {
    gsap.fromTo(navRef.current, {y: -100}, {y: 0})
  }, [])

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".nav__list-item", {y: 70, autoAlpha: 0}, {y: 0, autoAlpha: 1})
      gsap.fromTo(".nav__list-sub-item", {y: 50, autoAlpha: 0}, {y: 0, autoAlpha: 1})
    }, listRef);


    return () => ctx.revert()
  }, [isOpen])

  // const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
  return (
    <div className="simplified__nav">
      <nav ref={navRef}>
        <div className="logo">
        <a className="brand_logo" href="/" rel="noopener noreferrer">
            m.
          </a>
        </div>

        <div className={isOpen ? "nav__list active" : "nav__list"}>
          <ul ref={listRef}>
            {listItem.map((item, idx) => {
              return (
                <>
                  {item.sublist.length >= 1 ? (
                    <li className="nav__list-item"
                      key={idx}
                    >
                      <ListIconComp className="icon" /> {"  "} {item.title}
                      <ul className="nav__sublist">
                        {item.sublist.map((subItem, idx) => (
                          <Link to={subItem.url} key={idx+subItem.title}>
                            <li className="nav__list-sub-item">
                              <ListIconComp className="icon" /> {"  "}{" "}
                              {subItem.title}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <Link
                      to={item.url}
                      key={idx}
                    >
                      <li className="nav__list-item">
                        <ListIconComp className="icon" /> {"  "} {item.title}
                      </li>
                    </Link>
                  )}
                </>
              );
            })}
          </ul>
        </div>

        <div className="nav__toggle link">
          <div className="menu-icon">
            <input
              className="menu-icon__checkbox"
              type="checkbox"
              onChange={handleClick}
            />
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SimpleNav;
