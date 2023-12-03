import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import { Booking } from "../pages/Bookings";
import { Navigation } from "./Navigation";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bookings" element={<Booking />} />
      </Routes>
    </>
  );
};
