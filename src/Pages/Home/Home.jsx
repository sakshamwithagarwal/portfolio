import React, { createRef, useEffect } from "react";
import "./home.css";
import { Project } from "../../Components";
import { Navbar } from "../../Components"
import locomotiveScroll from "locomotive-scroll";

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
      <main>
        <h1 className="heading_main">
          <div className="animated_heading_wrapper">
            <span>Visual</span>
            <span>Industrial</span>
            <span>Interaction</span>
            <span>Visual</span>
          </div>

          <span>Designer</span>
        </h1>
        <p>
          I am an Industrial and Interaction Designer who creates designs that
          are both sustainable and universal. I try to draw inspiration from
          music and comics in order to create designs that provide a harmonious
          and consistent user experience for others.
        </p>
      </main>

      <section className="projects">
        <div className="section_title">
          <h3>Projects</h3>
        </div>
        <div className="section_container">
          <ol>
            <Project />
            <Project />
            <Project />
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Home;
