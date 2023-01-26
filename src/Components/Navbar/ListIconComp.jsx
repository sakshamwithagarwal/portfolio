import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={35}
    height={34}
    viewBox="0 0 35 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="listIcon"
  >
    <path
      d="M 2 32.4674 L 33 2 M 35 2 H 10.0462 M 33 0 V 24.4981"
    //   stroke="#83878D"
    //   strokeWidth={4}
      strokeMiterlimit={10}
    />
  </svg>
);
export default SVGComponent;
