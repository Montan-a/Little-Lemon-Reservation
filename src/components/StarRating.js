import { useState } from "react";
import "./starRating.css";

const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

export const StarRating = ({ value }) => {
  const [rating, setRating] = useState(parseInt(value) || 0);
  const [selection, setSeletion] = useState(0);

  const hoverOver = (e) => {
    let val = 0;
    if (e && e.target && e.target.getAttribute("data-star-id")) {
      val = e.target.getAttribute("data-star-id");
    }
    setSeletion(val);
  };

  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={(e) =>
        setRating(e.target.getAttribute("data-star-id" || rating))
      }
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
};
