import { useState, useEffect } from "react";
import { Card } from "@chakra-ui/react";

export function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === items.length - 1) {
      return setCurrentIndex(0);
    }

    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);

    return () => clearInterval(interval);
  });
  return (
    <div className="reviews flex-box carousel-containier ">
      {items.map((item, index) => {
        return (
          <Card
            className="review carousel-item"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          >
            <img src={item.image} alt="customer " className="customer-img" />
            <div className="review-content">
              <span className="review-author">{item.name}</span>
              <blockquote className="review-text">{item.review}</blockquote>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
