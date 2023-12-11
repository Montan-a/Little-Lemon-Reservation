import { NavBar } from "../sections/NavBar";
import { Hero } from "../sections/Hero";
import { Menu } from "../sections/Menu";
import { UserReviews } from "../components/FoodReviews";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Menu />
      <UserReviews />
      <Footer />
    </div>
  );
}
