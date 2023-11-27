import { Header } from "../sections/Header";
import { Navigation } from "../sections/Navigation";
import { Hero } from "../sections/Hero";
import { Menu } from "../sections/Menu";
import { Reviews } from "../sections/FoodReviews";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <>
      <div className="nav-flex-box header-nav">
        <Header />
        <Navigation />
      </div>
      <Hero />
      <Menu />
      <Reviews />
      <Footer />
    </>
  );
}
