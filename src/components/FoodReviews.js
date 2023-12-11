import customerImg_1 from "../img/user_1.jpg";
import customerImg_2 from "../img/user_2.jpg";
import customerImg_3 from "../img/user_3.jpg";
import customerImg_4 from "../icons_assets/Mario and Adrian A.jpg";
import customerImg_5 from "../img/user_4.jpg";
import { Carousel } from "./Carousel";

export const UserReviews = () => {
  const customers = [
    {
      name: "Julie McAllen",
      image: customerImg_2,
      review:
        "The wait staff is excellent. With a view over-looking Lake Michigan the outdoor dining experince is one of the best.",
    },
    {
      name: "Josh Brianent",
      image: customerImg_3,
      review:
        "The restaurant is pretty, but a pigeon stole a couple pieces of food of my plate. Our waiter was very understanding and replaced the meal.",
    },
    {
      name: "Richard Dillons",
      image: customerImg_1,
      review:
        "The food was great. I had to the chicken alfedo and my friendhad greek salad",
    },
    {
      name: "Mario Mario",
      image: customerImg_4,
      review:
        "The bruchetta was okay, and we had to wait about an hour for our main entrées",
    },
    {
      name: "Sofia Gregg",
      image: customerImg_5,
      review: "It was fine",
    },
  ];
  return (
    <section className="review-section margin-bottom-xl-lg ">
      <div className="review-container">
        <span className="heading">Reviews</span>
        <div className="carousel-container">
          <Carousel items={customers} />
        </div>
      </div>
    </section>
  );
};
