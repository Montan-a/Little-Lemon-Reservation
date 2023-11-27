import { MenuCard } from "./MenuCard.js";
import greekSalad from "../icons_assets/greek-salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonCake from "../icons_assets/lemon dessert.jpg";

const dishes = [
  {
    title: "Geek Salad",
    price: "$12.99",
    description: `This dish is a great choice for those who want something healthy, but
  don't want to sacrifice flavor. With tomatoes, red onions, romaine
  lettuce, feta cheese and balsamic vinaigrette.`,
    image: greekSalad,
  },
  {
    title: "Bruchetta",
    price: "$10.99",
    description: `This dish is an excellent appetizer consisting of grilled sourdough rubbed with garlic, olive oil, and salt. With your choice of sauces or anitpasto `,
    image: bruchetta,
  },
  {
    title: "Lemon Delight",
    price: "$9.99",
    description: `A delicious lemon dessert covered in buttercream icing and shaved coconut.`,
    image: lemonCake,
  },
];

export const Menu = () => {
  return (
    <section className="menu-section container flex-box">
      <div className="menu-heading">
        <h2 className="subheading">Today's Specials</h2>
        <button className="menu-btn">View the menu</button>
      </div>
      <div className="menu-card">
        {dishes.map((dish) => (
          <MenuCard
            title={dish.title}
            price={dish.price}
            description={dish.description}
            image={dish.image}
          />
        ))}
      </div>
    </section>
  );
};
