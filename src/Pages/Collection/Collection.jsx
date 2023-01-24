import React, { useState } from "react";
import "./collection.css";
import { SimpleNav } from "../../Components";
import collectionData from "../../assets/PostersList.json";

const Collection = () => {
  const [thumbnail, setThumbnail] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  const handleMouseEnter = (thumb) => {
    setThumbnail(thumb);
  };
  const handleMouseLeave = () => {
    setThumbnail("");
  };
  return (
    <div className="collection">
      <SimpleNav />

      <div className="collection__container">
        <div className="collection__thumbnail">
          <img src={"/assets/" + thumbnail} alt="" />
        </div>
        <div className="collection__list-wrapper">
          <h3 className="collection__list-title">Posters</h3>
          <ul className="collection__list">
            {collectionData.posters.map((item, key) => (
              <li
                className={
                  isTouched
                    ? "collection__list-item touched"
                    : "collection__list-item"
                }
                key={key}
                onMouseEnter={() => handleMouseEnter(item.thumbnail)}
                onMouseLeave={() => handleMouseLeave()}
                // onTouchStart={handleTouchStart}
                // onTouchMove={handleTouchStart}
                // onTouchEnd={handleTouchEnd}
              >
                <div>{item.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Collection;
