import customerImg_1 from "../img/user_1.jpeg";
import customerImg_2 from "../img/user_2.jpeg";
import customerImg_3 from "../img/user_3.jpeg";
import customerImg_4 from "../img/Mario and Adrian A.jpeg";
import { FadeIn } from "./ScrollAnimation.js";
import { StarRating } from "./StarRating.js";

import { Card } from "@chakra-ui/react";
import { ReviewForm } from "./ReviewForm.js";

export const customers = [
  {
    name: "Julie McAllen",
    image: customerImg_2,
    rating: <StarRating value={"5"} />,
    comment:
      "The wait staff is excellent. With a view over-looking Lake Michigan the outdoor dining experince is one of the best.",
  },
  {
    name: "Josh Brianent",
    image: customerImg_3,
    rating: <StarRating value={"3"} />,
    comment:
      "The restaurant is pretty, but a pigeon stole a couple pieces of food of my plate. Our waiter was very understanding and replaced the meal.",
  },
  {
    name: "Richard Dillons",
    image: customerImg_1,
    rating: <StarRating value={"4"} />,
    comment:
      "The food was great. I had to the chicken alfedo and my friendhad greek salad",
  },
  {
    name: "Mario Mario",
    image: customerImg_4,
    rating: <StarRating value={"2"} />,
    comment:
      "The bruchetta was okay, but we had to wait about an hour for our main entrées",
  },
];
export const UserReviews = () => {
  return (
    <FadeIn className="review-section margin-bottom-xl-lg">
      <span className="heading">Review</span>
      <div className="review-container">
        {customers.map((customer) => (
          <Card className="review carousel-item">
            <img
              src={customer.image}
              alt="customer "
              className="customer-img"
              loading="lazy"
            />

            {customer.rating}

            <div className="review-content">
              <span className="review-author">{customer.name}</span>
              <blockquote className="review-text">
                {customer.comment}
              </blockquote>
            </div>
          </Card>
        ))}
      </div>
      <ReviewForm />
    </FadeIn>
  );
};
