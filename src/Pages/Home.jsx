import React from "react";
import "./home.css";
import { Project } from "../Components";

const Home = () => {
  return (
    <div data-scroll data-scroll-speed="7" data-scroll-position="top">
      <main>
            <h1 className="heading_main">
                <div className="animated_heading">
                    <div className="word-1">
                        <div>Industrial</div>
                    </div>
                    <div className="word-2">
                        <div>Interaction</div>
                    </div>
                    <div className="word-3">
                        <div>Visual</div>
                    </div>
                </div>

                {/* <div className="animated_heading">
                    <span>Industrial</span>
                    <span>Interaction</span>
                    <span>Visual</span>
                </div>  */}
                <span>Designer</span>
            </h1>
            <p>
                I am an Industrial and Interaction Designer who creates designs
                that are both sustainable and universal. I try to draw inspiration
                from music and comics in order to create designs that provide
                a harmonious and consistent user experience for others.
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
