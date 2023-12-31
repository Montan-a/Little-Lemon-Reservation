import { useState } from "react";

export const ReviewForm = () => {
  const [review, setReview] = useState({
    fullName: "",
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
    if (review.comment.length < 10) {
      err.comment = "Comments must be at least 10 characters long";
    }
    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const clearForm = () => {
    setReview({
      fullName: "",
      comment: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      clearForm();
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="data-field">
        <label htmlFor="fullName" className="field-title">
          Name
        </label>
        <input
          type="text"
          className="input-field "
          placeholder="Your Name"
          name="fullName"
          onChange={handleChange}
        />
        <span className="non-valid">{formError.name}</span>
      </div>

      <div className="data-field">
        <label htmlFor="review" className="field-title">
          Comment
        </label>
        <textarea
          className="lg-input-field"
          placeholder="We hope you enjoyed your visit"
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
    </form>
  );
};
