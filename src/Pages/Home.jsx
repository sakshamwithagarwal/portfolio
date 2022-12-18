import React from "react";
import "./home.css";
import { Project } from "../Components";

const Home = () => {
  return (
    <div data-scroll data-scroll-speed="7" data-scroll-position="top">
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
          Hi there,
          <br />
          I, Saksham Parag Agarwal am an Industrial Design Student from <b style={{fontWeight: '400'}}>Delhi
          Technological University</b>. I also have a flair for Interaction and
          Visual design works. I like to create designs that are both universal
          sustainable. <br /> I try to draw inspiration from music and comics in order
          to create designs that provide a harmonious and consistent user
          experience for others.
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
