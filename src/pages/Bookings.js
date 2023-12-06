import { BookingForm } from "../components/BookingForm";
import { Footer } from "../sections/Footer";
import { NavBar } from "../sections/NavBar";

export const Booking = () => {
  return (
    <div className="booking-page">
      <NavBar />
      <BookingForm />
      <Footer />
    </div>
  );
};
