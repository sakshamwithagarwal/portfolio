import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={40}
      color="131, 135, 141"
      outerAlpha={1}
      innerScale={1}
      outerScale={2.5}
      clickables={[
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
        ".link",
        ".project"
      ]}
      innerStyle={{
        mixBlendMode: 'difference'
      }}
      outerStyle={{
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default CustomCursor;
