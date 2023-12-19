import { useState, useEffect } from "react";

import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

export const Carousel = ({ delay, children }) => {
  const [current, setCurrent] = useState(0);
  const [timer, setTimer] = useState(null);

  const handleNext = () => {
    // Reset the timer and switch to the next item
    clearTimeout(timer);
    setCurrent((current + 1) % children.length);
    setTimer(
      setTimeout(() => {
        setCurrent((current + 1) % children.length);
      }, delay)
    );
  };

  const handlePrevious = () => {
    // Reset the timer and switch to the previous item
    clearTimeout(timer);
    setCurrent((current - 1 + children.length) % children.length);
    setTimer(
      setTimeout(() => {
        setCurrent((current + 1) % children.length);
      }, delay)
    );
  };

  return (
    <div className="carousel">
      {children.length > 0 && (
        <div className="current">{children[current]}</div>
      )}
      {children.length > 1 && (
        <div className="buttons">
          <button className="btn-next" onClick={handlePrevious}>
            <VscArrowLeft />
          </button>
          <button className="btn-prev" onClick={handleNext}>
            <VscArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};
