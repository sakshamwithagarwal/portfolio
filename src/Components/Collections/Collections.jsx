import React from "react";
import { Link } from "react-router-dom";
import "./collections.css";

const Collections = () => {
  return <section className="collections" id="collections">
    <div className="section_title">
        <h3>Collections</h3>
    </div>
    <div className="section_container">
        <ul>
          <Link to="/collection"><li></li></Link>
          <Link to="/collection"><li></li></Link>
          <Link to="/collection"><li></li></Link>
          <Link to="/collection"><li></li></Link>
          <Link to="/collection"><li></li></Link>
        </ul>
    </div>
  </section>;
};

export default Collections;
