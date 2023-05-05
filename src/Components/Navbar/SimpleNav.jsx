import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import "./nav.css";
import "./custom-ham.css";
import ListIconComp from "./ListIconComp";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

// import listIcon from "../../assets/list-icon.svg"

const SimpleNav = ({ isOpen, setIsOpen }) => {
  const navRef = useRef(null);
  const listRef = useRef();

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -100 }, { y: 0 });
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav__list-item",
        { y: 70, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 }
      );
      gsap.fromTo(
        ".nav__list-sub-item",
        { y: 50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 }
      );
    }, listRef);

    return () => ctx.revert();
  }, [isOpen]);

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
            {/* m. */}
            <svg
              width="96"
              height="51"
              viewBox="0 0 96 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.37 49V49.5H55.87H67.402H67.902V49V15.799C67.902 11.1912 66.5466 7.45076 64.0289 4.86016C61.5097 2.26789 57.8821 0.884003 53.452 0.884003C47.577 0.884003 42.871 3.95532 39.2522 9.86244C37.0087 3.91106 31.9271 0.884003 26.017 0.884003C20.9535 0.884003 16.5756 3.34353 13.032 8.08035V2.128V1.628H12.532H1H0.5V2.128V49V49.5H1H12.532H13.032V49V31.795C13.032 25.1404 14.0734 20.0917 15.8127 16.7261C17.5455 13.373 19.9347 11.742 22.669 11.742C24.4826 11.742 25.7675 12.2481 26.6088 13.1908C27.4599 14.1444 27.935 15.6306 27.935 17.752V49V49.5H28.435H39.967H40.467V49V30.772C40.467 24.4928 41.5075 19.703 43.243 16.5023C44.9708 13.3161 47.3584 11.742 50.104 11.742C51.9176 11.742 53.2025 12.2481 54.0438 13.1908C54.8949 14.1444 55.37 15.6306 55.37 17.752V49ZM80.6206 47.6796C83.7919 50.8508 89.3165 50.8508 92.4877 47.6796C95.659 44.5083 95.659 38.9837 92.4877 35.8125C89.3165 32.6412 83.7919 32.6412 80.6206 35.8125C77.4494 38.9837 77.4494 44.5083 80.6206 47.6796Z"
                stroke="var(--text-main)"
              />
            </svg>
          </a>
        </div>

        <div className={isOpen ? "nav__list active" : "nav__list"}>
          <ul ref={listRef}>
            {listItem.map((item, idx) => {
              return (
                <div key={idx}>
                  {item.sublist.length >= 1 ? (
                    <li className="nav__list-item" key={idx + "-" + item.title}>
                      <ListIconComp className="icon" /> {"  "} {item.title}
                      <ul className="nav__sublist">
                        {item.sublist.map((subItem, idx_) => (
                          <Link
                            to={subItem.url}
                            key={idx_ + "-" + subItem.title}
                            onClick={() => setIsOpen(!isOpen)}
                          >
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
                      key={idx + "-" + item.title}
                      onClick={() => setIsOpen(!isOpen)}
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
