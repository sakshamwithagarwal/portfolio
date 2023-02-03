import React, { forwardRef } from "react";
import "./cursor.css";

const Cursor = forwardRef((props, ref) => {
  return (
    <div className="cursor" ref={ref}>
      <div className="cursor__ball cursor__ball--big" ref={cursorBigCircle}>
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small" ref={cursorSmallCircle}>
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
        </svg>
      </div>
    </div>
  );
});

export default Cursor;
