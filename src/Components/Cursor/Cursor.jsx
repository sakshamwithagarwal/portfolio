import React, {
  useEffect,
  useRef,
  useContext,
  useCallback,
  useState,
} from "react";
import { useEventListener } from "../../hooks/useEventListener";
import "./cursor.css";

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
    "Link"
  ];
  const trailingSpeed = 8;
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

  return (
    <>
      <div
        className="cursor__ball cursor__ball--big"
        ref={cursorBigCircle}
      ></div>
      <div
        className="cursor__ball cursor__ball--small"
        ref={cursorSmallCircle}
      ></div>
    </>
  );
};

export default Cursor;
