import React, { createRef, useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import { Navbar, Main, AllProjects, Collections } from "../../Components";
import "./home.css";

const Home = () => {
  const scrollRef = createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });
  return (
    <div data-scroll data-scroll-speed="7" data-scroll-position="top" ref={scrollRef}>
      <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="circle"></div>
        <Navbar />
        <Main />
        <AllProjects />
        <Collections />
    </div>
  );
};

export default Home;
