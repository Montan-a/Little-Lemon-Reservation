import Home from "../pages/Home";
import { Link, Route, Routes } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav className="main-nav">
        <a href="#" className="nav-list-item">
          Menu
        </a>

        <a href="#" className="nav-list-item">
          About
        </a>

        <a href="#" className="nav-list-item">
          Reservation
        </a>

        <a href="#" className="nav-list-item">
          Order online
        </a>

        <a href="#" className="nav-list-item">
          Login
        </a>

        {/* <Link to="/" className="nav-list-item">
          Home
        </Link>
        <Link to="/About" className="nav-list-item">
          About
        </Link>
        <Link to="/Reservation" className="nav-list-item">
          Reservation
        </Link>
        <Link to="/OnlineOrder" className="nav-list-item">
          Order online
        </Link>
        <Link to="/Login" className="nav-list-item">
          Login
        </Link> */}
        {/* <Link to="/" className="nav-list-item">
          Home
        </Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes> */}
      </nav>
    </>
  );
};
