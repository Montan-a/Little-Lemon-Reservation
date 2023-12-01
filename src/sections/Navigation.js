import Home from "../pages/Home";
import { Booking } from "../pages/Bookings";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav className="main-nav">
        <Link to="/" className="nav-list-item">
          Home
        </Link>
        <Link to="/Bookings" className="nav-list-item">
          Booking
        </Link>
      </nav>
    </>
  );
};
