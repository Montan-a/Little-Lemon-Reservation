import { useState } from "react";

export const BookingForm = () => {
  const [reserve, setReserve] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    date: "",
    time: "",
    numOfGuest: null,
    occasion: "",
  });

  const handleChange = (e) => {
    setReserve({
      ...reserve,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(reserve);
    alert(`Form submitted `);
  };
  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="data-field">
        <label htmlFor="firstName" className="field-title">
          First Name
        </label>
        <input
          type="text"
          id="first-name"
          className="input-field contact-info"
          placeholder="First Name"
          value={reserve.firstName}
          onChange={handleChange}
          name="firstName"
        />
      </div>
      <div className="data-field">
        <label htmlFor="lastName" className="field-title">
          Last Name
        </label>
        <input
          type="text"
          id="last-name"
          className="input-field contact-info"
          placeholder="Last name"
          value={reserve.lastName}
          onChange={handleChange}
          name="lastName"
        />
      </div>
      <div className="data-field">
        <label htmlFor="email" className="field-title">
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
      </div>
      <div className="data-field">
        <label htmlFor="phone-number" className="field-title">
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
      </div>
      <div className="data-field">
        <label htmlFor="res-date" value={reserve.date} className="field-title">
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
      </div>
      <div className="data-field">
        <label htmlFor="res-time" className="field-title">
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
      </div>
      <div className="data-field">
        <label htmlFor="guests" className="field-title">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="numOfGuest"
          value={reserve.numOfGuest}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="data-field">
        <label htmlFor="occasion" className="field-title">
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
      <input type="submit" value="Reserve" className="submit-btn" />
    </form>
  );
};
