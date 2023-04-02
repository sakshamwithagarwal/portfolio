import React from "react";
import "./project.css";

import { SimpleNav } from "../../Components";

const ExpandedProject = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <SimpleNav isOpen={isOpen} setIsOpen={setIsOpen} />
      {!isOpen ? (
        <img
          src="/assets/dark-pj.png"
          alt=""
          style={{
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ExpandedProject;
