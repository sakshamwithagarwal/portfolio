import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import "./cursor.css";
import { MouseContext } from "../../context/MouseContext";

const Cursor = () => {
  const cursorBigCircle = useRef(null);
  const cursorSmallCircle = useRef(null);
  const { cursorType } = useContext(MouseContext);
  const cursorVisible = useRef(true);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      cursorBigCircle.current.style.opacity = 1;
      cursorSmallCircle.current.style.opacity = 1;
    } else {
      cursorBigCircle.current.style.opacity = 0;
      cursorSmallCircle.current.style.opacity = 0;
    }
  };

  const moveCursor = (e) => {
    gsap.to(cursorBigCircle.current, {
      x: e.pageX - 15,
      y: e.pageY - 15,
      duration: 0.4,
    });

    gsap.to(cursorSmallCircle.current, {
      x: e.pageX - 5,
      y: e.pageY - 7,
      duration: 0.1,
    });
  };

  const mouseHover = (e) => {
    gsap.to(cursorBigCircle.current, {
      scale: 3,
    });
  };
  const mouseHoverOut = (e) => {
    gsap.to(cursorBigCircle.current, {
      scale: 1,
    });
  };

  const onClickCursor = () => {
    gsap.fromTo(
      cursorBigCircle.current,
      { scale: 1.5, ease: "true" },
      { scale: 1, duration: 1.5 }
    );
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", onClickCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", onClickCursor);
    };
  }, []);

  useEffect(() => {
    if (cursorBigCircle.current.classList.contains("hoverable")) {
      mouseHover()
    } else {
      mouseHoverOut()
    }
  }, [cursorType]);

  return (
    <div className="cursor">
      <div
        className={`cursor__ball cursor__ball--big ${cursorType}`}
        ref={cursorBigCircle}
      >
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small" ref={cursorSmallCircle}>
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
