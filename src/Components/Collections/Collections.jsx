import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MouseContext } from "../../context/MouseContext";
import "./collections.css";

const Collections = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <section className="collections" id="collections">
      <div className="section_title">
        <h3>Collections</h3>
      </div>
      <div className="section_container">
        <ul>
          <Link
            to="/collection"
            onMouseEnter={() => cursorChangeHandler("hoverable")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <li></li>
          </Link>
          <Link
            to="/collection"
            onMouseEnter={() => cursorChangeHandler("hoverable")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <li></li>
          </Link>
          <Link
            to="/collection"
            onMouseEnter={() => cursorChangeHandler("hoverable")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <li></li>
          </Link>
          <Link
            to="/collection"
            onMouseEnter={() => cursorChangeHandler("hoverable")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <li></li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Collections;
