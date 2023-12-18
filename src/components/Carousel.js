import { useState, useEffect } from "react";
import { Card } from "@chakra-ui/react";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";

export const Carousel = ({ delay, children }) => {
  const [current, setCurrent] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // Start the timer to switch to the next item
    setTimer(
      setTimeout(() => {
        setCurrent((current + 1) % children.length);
      }, delay)
    );

    // Clear the timer on unmount
    return () => clearTimeout(timer);
  }, [current, delay, children.length, timer]);

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
          <button className="button-next" onClick={handlePrevious}>
            <VscArrowLeft />
          </button>
          <button className="button-previous" onClick={handleNext}>
            <VscArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};
