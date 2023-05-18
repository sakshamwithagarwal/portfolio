import React, { createRef, useEffect, useRef } from "react";
import locomotiveScroll from "locomotive-scroll";
import { Navbar, Main, AllProjects, Collections } from "../../Components";
import "./home.css";
import { motion as m } from "framer-motion";

const Home = ({ handler, projects }) => {
  const projectCompRef = useRef(null);
  const scrollRef = createRef();

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });
  // });

  return (
    <m.div
      // data-scroll-container
      // data-scroll
      // data-scroll-speed="7"
      // data-scroll-position="top"
      // ref={scrollRef}

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, delay: 1, ease: "easeOut" }}

      // exit={{opacity: 0}}
    >
      {/* <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="circle"></div> */}
      {/* <Navbar handler={handler} /> */}
      <Main compRef={projectCompRef} />
      <AllProjects projects={projects} ref={projectCompRef} />
      <Collections />
    </m.div>
  );
};

export default Home;
