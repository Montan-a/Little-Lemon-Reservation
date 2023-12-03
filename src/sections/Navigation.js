import { Link } from "react-router-dom";
import { BreadCrumbs } from "../hooks/pageView";

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
