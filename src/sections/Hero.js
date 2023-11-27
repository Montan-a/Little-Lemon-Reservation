import restaurant from "../icons_assets/restaurant.jpg";
export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container flex-box">
        <div className="text-box">
          <span className="hero-title margin-bottom-xl-sm">Little Lemon</span>
          <span className="hero-subtitle margin-bottom-md">Chicago</span>

          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            magnam vero maxime, error repellendus ullam, ipsa ratione animi
            delectus dolorum voluptatem nam explicabo incidunt sapiente, atque
            voluptas? Natus, beatae laborum?
          </p>
        </div>
        <div className="img-box">
          <img src={restaurant} alt="resturant interior" />
        </div>
      </div>
    </section>
  );
};
