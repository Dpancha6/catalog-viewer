import React, { Fragment, useState, useEffect } from "react";
import "h8k-components";

import { image1, image2, image3, image4 } from "./assets/images";
import { Thumbs, Viewer, Header } from "./components";
import "./index.css";

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1,
    },
    {
      thumb: image2,
      image: image2,
    },
    {
      thumb: image3,
      image: image3,
    },
    {
      thumb: image4,
      image: image4,
    },
  ];

  const [catalogs] = useState([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideTimer, setSlideTimer] = useState(null);
  const slideDuration = 1000;

  const handlePrevClick = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + catalogs.length) % catalogs.length
    );
  };
  const handleNextClick = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex + 1 + catalogs.length) % catalogs.length
    );
  };
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };
  const handleSlideShowToggle = () => {
    if (slideTimer) {
      clearInterval(slideTimer);
      setSlideTimer(null);
    } else {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % catalogs.length);
      }, slideDuration);
      setSlideTimer(timer);
    }
  };

  useEffect(() => {
    return () => clearInterval(slideTimer);
  }, [slideTimer]);

  return (
    <Fragment>
      <Header />
      <div className="layout-column justify-content-center mt-50">
        <div className="layout-row justify-content-center">
          <div className="card py-25">
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className="layout-row justify-content-center align-items-center mt-20">
              <button
                className="icon-only outlined"
                data-testid="prev-slide-btn"
                onClick={handlePrevClick}
              >
                <i className="material-icons">arrow_back</i>
              </button>
              <Thumbs
                items={catalogs}
                currentIndex={activeIndex}
                onThumbnailClick={handleThumbnailClick}
              />
              <button
                className="icon-only outlined"
                data-testid="next-slide-btn"
                onClick={handleNextClick}
              >
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className="checkbox-container layout-row justify-content-center mt-25">
          <input
            type="checkbox"
            id="toggle-slide-show"
            data-testid="toggle-slide-show-button"
            onChange={handleSlideShowToggle}
          />
          <label htmlFor="toggle-slide-show">Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
