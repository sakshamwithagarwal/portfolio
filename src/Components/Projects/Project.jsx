import React, { useRef, useState } from "react";
import "./project.css";

const Project = () => {
  const modelRef = useRef();
  const [annots, setAnnots] = useState([]);

  const handleClick = (event) => {
    const { clientX, clientY } = event;

    if (modelRef.current) {
      let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY);
      if (hit) {
        setAnnots((annots) => {
          return [...annots, hit];
        });
      }
    }
  };

  const getDataPosition = (annot) => {
    return `${annot.position.x} ${annot.position.y} ${annot.position.z}`;
  };

  const getDataNormal = (annot) => {
    return `${annot.normal.x} ${annot.normal.y} ${annot.normal.z}`;
  };

  return (
    <li className="project">
      <div className="project_container">
        {/* <model-viewer
          className="model-viewer"
          src="./3D-models/plug-tug-glass.gltf"
          alt="plug tug 3D model"
          exposure="0.008"
          camera-controls
          ref={(ref) => {
            modelRef.current = ref;
          }}
          style = {{width: '50%', minHeight: '50vh', margin: 'auto'}}
        >
          {annots.map((annot, idx) => (
            <button
              key={`hotspot-${idx}`}
              className="view-button"
              slot={`hotspot-${idx}`}
              data-position={getDataPosition(annot)}
              data-normal={getDataNormal(annot)}
            ></button>
          ))}
        </model-viewer> */}
        {/* <img src="/assets/temp-1.png" alt="" /> */}
      </div>
      <div className="project_details">
        <div className="left">Project Duration - 3 Months</div>
        <div className="right">August &#39;21 - October &#39;21</div>
      </div>
    </li>
  );
};

export default Project;
