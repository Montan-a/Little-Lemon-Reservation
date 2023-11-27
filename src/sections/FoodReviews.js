import customerImg_1 from "../img/user_1.jpg";
import customerImg_2 from "../img/user_2.jpg";
import customerImg_3 from "../img/user_3.jpg";
export const Reviews = () => {
  return (
    <section className="review-section margin-bottom-xl-lg ">
      <div className="review-container">
        <span className="heading">Reviews</span>

        <div className="reviews flex-box ">
          <figure className="review">
            <img
              src={customerImg_1}
              alt="customer image"
              className="customer-img"
            />
            <div className="review-content ">
              <span className="review-author">Richard Dillons</span>
              <blockquote className="review-text">
                The food was great. I had to the chicken alfedo and my friend
                had greek salad
              </blockquote>
            </div>
          </figure>
          <figure className="review">
            <img
              src={customerImg_2}
              alt="customer image"
              className="customer-img"
            />
            <div className="review-content ">
              <span className="review-author">Juile McAllen</span>
              <blockquote className="review-text">
                The food was great. I had to the chicken alfedo and my friend
                had greek salad
              </blockquote>
            </div>
          </figure>
          <figure className="review">
            <img
              src={customerImg_3}
              alt="customer image"
              className="customer-img"
            />
            <div className="review-content ">
              <span className="review-author">Josh Brianent</span>
              <blockquote className="review-text">
                The food was great. I had to the chicken alfedo and my friend
                had greek salad
              </blockquote>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
