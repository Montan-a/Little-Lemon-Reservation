import { useState } from "react";
import { IconContext } from "react-icons/lib";

import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

export const Carousel = ({ delay, children }) => {
  const [current, setCurrent] = useState(0);
  const [timer, setTimer] = useState(null);

  const handleNext = () => {
    setCurrent((current + 1) % children.length);
  };

  const handlePrevious = () => {
    setCurrent((current - 1 + children.length) % children.length);
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
