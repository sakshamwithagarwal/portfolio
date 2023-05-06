import React, { createRef, useEffect, useRef } from "react";
import locomotiveScroll from "locomotive-scroll";
import { Navbar, Main, AllProjects, Collections } from "../../Components";
import "./home.css";

const Home = ({ onClick, projects }) => {
  const projectCompRef = useRef(null);
  const scrollRef = createRef();

  return (
    <div
      // data-scroll
      // data-scroll-speed="7"
      // data-scroll-position="top"
      ref={scrollRef}
    >
      {/* <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="circle"></div> */}
      <Navbar handler={onClick} />
      <Main compRef={projectCompRef} />
      <AllProjects projects={projects} ref={projectCompRef} />
      <Collections />
    </div>
  );
};

export default Home;
