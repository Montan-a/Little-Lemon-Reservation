import { NavBar } from "../sections/NavBar";
import { Hero } from "../sections/Hero";
import { Menu } from "../sections/Menu";
import { Reviews } from "../sections/FoodReviews";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Menu />
      <Reviews />
      <Footer />
    </>
  );
}
