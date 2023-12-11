import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Booking } from "../pages/Bookings";

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
