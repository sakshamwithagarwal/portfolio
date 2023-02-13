import React, { useContext, useState } from "react";
import "./collection.css";
import { SimpleNav } from "../../Components";
import collectionData from "../../assets/PostersList.json";
import { MouseContext } from "../../context/MouseContext";
const Collection = () => {
  const [thumbnail, setThumbnail] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const storageKey = "theme-preference";
  const { cursorChangeHandler} = useContext(MouseContext)

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  };

  const theme = { value: getColorPreference() };

  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
  };

  const reflectPreference = () => {
    document.firstElementChild.setAttribute("data-theme", theme.value);

    document
      .querySelector("#theme-toggle")
      ?.setAttribute("aria-label", theme.value);
  };

  reflectPreference();

  window.onload = () => {
    reflectPreference();
  };

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

  (function (timer) {
    window.addEventListener("load", function () {
      var el = document.querySelector(".collection__list");
      el.addEventListener("scroll", function (e) {
        (function (el) {
          el.classList.add("scroll");
          clearTimeout(timer);
          timer = setTimeout(function () {
            el.classList.remove("scroll");
          }, 100);
        })(el);
      });
    });
  })();

  return (
    <div className="collection">
      <SimpleNav />

      <div className="collection__container">
        <div className="collection__thumbnail">
          <img src={"/assets/" + thumbnail} alt="" />
        </div>
        <div className="collection__list-wrapper">
          <h3 className="collection__list-title">Posters</h3>
          <div className="collection__list-outer">
            <ul className="collection__list">
              {collectionData.posters.map((item, key) => (
                <li
                  className={
                    isTouched
                      ? "collection__list-item touched"
                      : "collection__list-item"
                  }
                  key={key}
                  onMouseEnter={() => {handleMouseEnter(item.thumbnail); cursorChangeHandler("hoverable")}}
                  onMouseLeave={() => {handleMouseLeave(); cursorChangeHandler("")}}
                  // onTouchStart={handleTouchStart}
                  // onTouchMove={handleTouchStart}
                  // onTouchEnd={handleTouchEnd}
                >
                  <div style={item.diffFont ? {fontFamily: item.fontFamily} : {}}>{item.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
