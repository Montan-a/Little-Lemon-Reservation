import { useState } from "react";

export const ReviewForm = () => {
  const [review, setReview] = useState({
    fullName: "",
    email: "",
    comment: "",
  });
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let err = {};
    if (review.fullName === "") {
      err.name = "Please enter your name";
    }
    if (review.email === "") {
      err.email = "Please enter your email";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(review.email)) {
        err.email = "Enter a vaild email";
      }
    }
    if (review.comment.length < 10) {
      err.comment = "Comments must be at least 10 characters long";
    }
    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const clearForm = () => {
    setReview({
      fullName: "",
      email: "",
      comment: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      alert(`Thank you ${review.fullName} for you review`);
      clearForm();
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="user-info flex-box">
        <div className="data-field">
          <label htmlFor="fullName" id="fullName" className="field-title">
            Name
          </label>
          <input
            type="text"
            className="input-field"
            value={review.fullName}
            placeholder="Your Name"
            name="fullName"
            onChange={handleChange}
          />
          <span className="non-valid">{formError.name}</span>
        </div>
        <div className="data-field">
          <label htmlFor="email" id="email" className="field-title">
            Email
          </label>
          <input
            type="text"
            className="input-field "
            placeholder="example@email.com"
            value={review.email}
            name="email"
            onChange={handleChange}
          />
          <span className="non-valid">{formError.name}</span>
        </div>
      </div>

      <div className="comment-field flex-box">
        <div className="data-field">
          <label htmlFor="review" id="review" className="field-title">
            Comment
          </label>
          <textarea
            className="lg-input-field"
            placeholder="We hope you enjoyed your visit"
            value={review.comment}
            name="comment"
            onChange={handleChange}
          ></textarea>
          <span className="non-valid">{formError.comment}</span>
        </div>

        <input
          type="submit"
          value="Submit"
          className="submit-btn"
          id="submit-btn"
        />
      </div>
    </form>
  );
};
