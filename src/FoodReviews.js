import customerImg_1 from "./img/user_1.jpg";
import customerImg_2 from "./img/user_2.jpg";
import customerImg_3 from "./img/user_3.jpg";
export const Reviews = () => {
  return (
    <section className="review-section ">
      <div className="review-container">
        <span>Reviews</span>

        <div className="reviews">
          <figure className="review">
            <img
              src={customerImg_1}
              alt="customer image"
              className="customer-img"
            />
            <blockquote>
              The food was great. I had to the chicken alfedo and my friend had
              greek salad
            </blockquote>
          </figure>
          <figure className="review">
            <img
              src={customerImg_2}
              alt="customer image"
              className="customer-img"
            />
            <blockquote>
              The food was great. I had to the chicken alfedo and my friend had
              greek salad
            </blockquote>
          </figure>
          <figure className="review">
            <img
              src={customerImg_3}
              alt="customer image"
              className="customer-img"
            />
            <blockquote>
              The food was great. I had to the chicken alfedo and my friend had
              greek salad
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
};
