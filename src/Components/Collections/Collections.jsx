import React from "react";
import { Link } from "react-router-dom";
import "./collections.css";
import { motion } from "framer-motion";

const Collections = () => {
  return (
    <motion.section
      className="collections"
      id="collections"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ ease: "easeInOut", delay: 0 }}
    >
      <div className="section_title">
        <h3>Collections</h3>
      </div>
      <div className="section_container">
        <ul>
          <Link to="/collection">
            <li></li>
          </Link>
          <Link to="/collection">
            <li></li>
          </Link>
          <Link to="/collection">
            <li></li>
          </Link>
          <Link to="/collection">
            <li></li>
          </Link>
        </ul>
      </div>
    </motion.section>
  );
};

export default Collections;
