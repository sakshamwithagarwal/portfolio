import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"

const Background = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      line1Ref.current,
      { height: 0 },
      { height: "100%", duration: 1.4, delay: 0.6 }
    );
    gsap.fromTo(
      line2Ref.current,
      { height: 0 },
      { height: "100%", duration: 1.4, delay: 0.8 }
    );
    gsap.fromTo(
      line3Ref.current,
      { height: 0 },
      { height: "100%", duration: 1.4, delay: 1 }
    );
    gsap.fromTo(
      circleRef.current,
      { width: 0, height: 0 },
      { width: "29.27vw", height: "29.27vw", duration: 1, delay: 1.2 }
    );
  }, []);

  return (
    <>
      <div className="line-1" ref={line1Ref}></div>
      <div className="line-2" ref={line2Ref}></div>
      <div className="line-3" ref={line3Ref}></div>
      <div className="circle" ref={circleRef}></div>
    </>
  );
};

export default Background;
