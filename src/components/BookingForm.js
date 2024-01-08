import { useState } from "react";

export const BookingForm = () => {
  const [reserve, setReserve] = useState({
    fullName: "",
    email: "",
    telephone: "",
    date: "",
    time: "",
    numOfGuests: null,
    occasion: "",
  });
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    setReserve({
      ...reserve,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let err = {};
    if (reserve.fullName === "") {
      err.name = "Please enter your name";
    }
    if (reserve.email === "") {
      err.email = "Please enter your email";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(reserve.email)) {
        err.email = "Enter a vaild email";
      }
    }

    if (reserve.telephone === "") {
      err.telephone = "Please enter a phone number";
    } else {
      let phoneregex =
        /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
      if (!phoneregex.test(reserve.telephone)) {
        err.telephone = "Enter a valid phone number";
      }
    }

    if (reserve.numOfGuests === null) {
      err.numOfGuests = "Number of guests is required";
    }

    if (reserve.date === "") {
      err.date = "Please select a date";
    }

    if (reserve.time === "") {
      err.time = "Please select a time";
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const clearForm = () => {
    setReserve({
      fullName: "",
      email: "",
      telephone: "",
      date: "",
      time: "",
      numOfGuests: null,
      occasion: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table(reserve);
    const isVaild = validateForm();
    if (isVaild) {
      alert("Form submitted");
      clearForm();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="flex-box--column">
        <div className="data-field">
          <label htmlFor="fullName" id="fullName" className="field-title">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            className="input-field contact-info"
            placeholder="John Doe"
            value={reserve.fullName}
            onChange={handleChange}
            name="fullName"
          />
          <span className="non-valid">{formError.name}</span>
        </div>

        <div className="data-field">
          <label htmlFor="email" id="email" className="field-title">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input-field contact-info"
            value={reserve.email}
            onChange={handleChange}
            name="email"
            placeholder="example@email.com"
          />
          <span className="non-valid">{formError.email}</span>
        </div>
        <div className="data-field">
          <label
            htmlFor="phone-number"
            id="phone-number"
            className="field-title"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone-number"
            className="input-field contact-info"
            value={reserve.telephone}
            onChange={handleChange}
            name="telephone"
            placeholder="000-000-0000"
          />
          <span className="non-valid">{formError.telephone}</span>
        </div>
      </div>

      <div className="flex-box--column">
        <div className="data-field">
          <label
            htmlFor="res-date"
            id="res-date"
            value={reserve.date}
            className="field-title"
          >
            Choose a date
          </label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={reserve.date}
            onChange={handleChange}
            className="input-field"
          />
          <span className="non-valid">{formError.date}</span>
        </div>
        <div className="data-field">
          <label htmlFor="res-time" id="res-time" className="field-title">
            Choose time
          </label>
          <select
            value={reserve.time}
            id="res-time"
            onChange={handleChange}
            name="time"
            className="input-field"
          >
            <option value="17:00" className="time-option">
              17:00
            </option>
            <option value="18:00" className="time-option">
              18:00
            </option>
            <option value="19:00" className="time-option">
              19:00
            </option>
            <option value="20:00" className="time-option">
              20:00
            </option>
            <option value="21:00" className="time-option">
              21:00
            </option>
            <option value="22:00" className="time-option">
              22:00
            </option>
          </select>
          <span className="non-valid">{formError.time}</span>
        </div>
        <div className="data-field">
          <label htmlFor="guests" id="guests" className="field-title">
            Number of guests
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="numOfGuests"
            value={reserve.numOfGuests}
            onChange={handleChange}
            className="input-field"
          />
          <span className="non-valid">{formError.numOfGuests}</span>
        </div>
      </div>
      <div className="data-field">
        <label htmlFor="occasion" id="occasion" className="field-title">
          Occasion
        </label>
        <select
          name="occasion"
          id="occasion"
          value={reserve.occasion}
          onChange={handleChange}
          className="input-field occasion"
          placeholder="What's the occasion?"
        >
          <option value="" className="occasion-placeholder">
            -- Choose an occasion --
          </option>
          <option value="Birthday" className="occasion-option">
            Birthday
          </option>
          <option value="Anniversary" className="occasion-option">
            Anniversary
          </option>
        </select>
      </div>
      <input
        type="submit"
        value="Reserve"
        className="submit-btn"
        id="submit-btn"
      />
    </form>
  );
};
