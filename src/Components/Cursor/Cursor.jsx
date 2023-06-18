import React, {
  useEffect,
  useRef,
  useContext,
  useCallback,
  useState,
} from "react";
import { useEventListener } from "../../hooks/useEventListener";
import "./cursor.css";
import { motion } from "framer-motion";

const Cursor = () => {
  const cursorBigCircle = useRef();
  const cursorSmallCircle = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const clickables = [
    "a",
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    "label[for]",
    "select",
    "textarea",
    "button",
    ".hoverable",
    ".link",
    "Link",
  ];
  const trailingSpeed = 5;
  let endX = useRef(0);
  let endY = useRef(0);

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    cursorSmallCircle.current.style.top = `${clientY}px`;
    cursorSmallCircle.current.style.left = `${clientX}px`;
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuter = useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / trailingSpeed;
        coords.y += (endY.current - coords.y) / trailingSpeed;
        cursorBigCircle.current.style.top = `${coords.y}px`;
        cursorBigCircle.current.style.left = `${coords.x}px`;
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuter);
    },
    [requestRef]
  );
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuter);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateOuter]);

  const onMouseDown = useCallback(() => setIsActive(true));
  const onMouseUp = useCallback(() => setIsActive(false));
  const onMouseEnterViewport = useCallback(() => setIsVisible(true), []);
  const onMouseLeaveViewport = useCallback(() => setIsVisible(false), []);

  useEventListener("mousemove", onMouseMove);
  useEventListener("mousedown", onMouseDown);
  useEventListener("mouseup", onMouseUp);
  useEventListener("mouseover", onMouseEnterViewport);
  useEventListener("mouseout", onMouseLeaveViewport);

  useEffect(() => {
    if (isActive) {
      cursorSmallCircle.current.style.transform = `translate(-50%, -50%)`;
      cursorBigCircle.current.style.transform = `translate(-50%, -50%) scale(3)`;
      cursorBigCircle.current.style.transitionDuration = `300ms`;
    } else {
      cursorSmallCircle.current.style.transform =
        "translate(-50%, -50%) scale(1)";
      cursorBigCircle.current.style.transform =
        "translate(-50%, -50%) scale(1)";
    }
  }, [isActive]);

  useEffect(() => {
    if (isVisible) {
      cursorBigCircle.current.style.opacity = 1;
      cursorSmallCircle.current.style.opacity = 1;
    } else {
      cursorBigCircle.current.style.opacity = 0;
      cursorSmallCircle.current.style.opacity = 0;
    }
  }, [isVisible]);

  // useEffect(() => {
  //   const clickableEles = document.querySelectorAll(clickables.join(","));
  //   clickableEles.forEach((el) => {
  //     el.style.cursor = "none";
  //     el.addEventListener("mouseover", () => {
  //       setIsActive(true);
  //     });
  //     el.addEventListener("click", () => {
  //       setIsActive(true);
  //       setIsActiveClickable(false);
  //     });
  //     el.addEventListener("mousedown", () => {
  //       setIsActiveClickable(true);
  //     });
  //     el.addEventListener("mouseup", () => {
  //       setIsActive(true);
  //     });
  //     el.addEventListener("mouseout", () => {
  //       setIsActive(false);
  //       setIsActiveClickable(false);
  //     });
  //   });

  //   return () => {
  //     clickableEles.forEach((el) => {
  //       el.removeEventListener("mouseover", () => {
  //         setIsActive(true);
  //       });
  //       el.removeEventListener("click", () => {
  //         setIsActive(true);
  //         setIsActiveClickable(false);
  //       });
  //       el.removeEventListener("mousedown", () => {
  //         setIsActiveClickable(true);
  //       });
  //       el.removeEventListener("mouseup", () => {
  //         setIsActive(true);
  //       });
  //       el.removeEventListener("mouseout", () => {
  //         setIsActive(false);
  //         setIsActiveClickable(false);
  //       });
  //     });
  //   };
  // }, [isActive, clickables]);

  const variants = {
    bigCursor: {
      click: { left: 821, opacity: 1, top: 188, x: "-50%", y: "-50%" },
      clickSelected: { left: 821, opacity: 0, top: 188, x: "-50%", y: "-50%" },
      invisible: { left: 821, opacity: 0, top: 188, x: "-50%", y: "-50%" },
      selected: { left: 821, opacity: 0, top: 188, x: "-50%", y: "-50%" },
      visible: { left: 821, opacity: 1, top: 188, x: "-50%", y: "-50%" },
    },
    smallCursor: {
      click: {
        backgroundColor: "var(--text-main)",
        borderStyle: "solid",
        borderWidth: 1.5,
        left: 512,
        opacity: 1,
        scale: 2,
        top: 602,
        x: "-50%",
        y: "-50%",
      },
      clickSelected: {
        backgroundColor: "var(--text-main)",
        borderStyle: "none",
        borderWidth: 0,
        left: 512,
        opacity: 1,
        scale: 4,
        top: 602,
        x: "-50%",
        y: "-50%",
      },
      invisible: {
        // backgroundColor: "rgba(0, 0, 0, 0)",
        // borderStyle: "solid",
        // borderWidth: 0,
        // left: 512,
        opacity: 0,
        scale: 1,
        // top: 602,
        x: "-50%",
        y: "-50%",
      },
      selected: {
        backgroundColor: "var(--text-main)",
        borderStyle: "none",
        borderWidth: 0,
        left: 512,
        opacity: 1,
        scale: 2,
        top: 602,
        x: "-50%",
        y: "-50%",
      },
      visible: {
        // backgroundColor: "rgba(0, 0, 0, 0)",
        // borderStyle: "solid",
        // borderWidth: 2,
        // left: 512,
        opacity: 1,
        scale: 1,
        // top: 602,
        x: "-50%",
        y: "-50%",
      },
    },
  };

  return (
    <>
      <motion.div
        className="cursor__ball cursor__ball--big"
        // animate="visible"
        // initial="invisible"
        // variants={variants.bigCursor}
        // transition={{ mass: 0.15, stiffness: 200, type: "spring" }}
        ref={cursorBigCircle}
      ></motion.div>
      <motion.div
        className="cursor__ball cursor__ball--small"
        // variants={variants.smallCursor}
        // animate="visible"
        // initial="invisible"
        // transition={{ mass: 0.25, stiffness: 200, type: "spring" }}
        ref={cursorSmallCircle}
      ></motion.div>
    </>
  );
};

export default Cursor;
