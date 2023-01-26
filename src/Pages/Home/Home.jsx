import React, { createRef, useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import { Navbar, Main, AllProjects, Collections } from "../../Components";
import "./home.css";

const Home = () => {
  const scrollRef = createRef();
  const storageKey = "theme-preference";

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });

  const onClick = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    setPreference();
  };

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

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches: isDark }) => {
      theme.value = isDark ? "dark" : "light";
      setPreference();
    });

  return (
    <div
      data-scroll
      data-scroll-speed="7"
      data-scroll-position="top"
      ref={scrollRef}
    >
      {/* <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="circle"></div> */}
      <Navbar handler={onClick} />
      <Main />
      <AllProjects />
      <Collections />
    </div>
  );
};

export default Home;
