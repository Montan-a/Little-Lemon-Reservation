import { MenuCard } from "./MenuCard.js";

const dishes = [
  {
    title: "Geek Salad",
    price: "$12.99",
    description: `This dish is a great choice for those who want something healthy, but
  don't want to sacrifice flavor. With tomatoes, red onions, romaine
  lettuce, feta cheese and balsamic vinaigrette.`,
    image: "./icons_assets/greek-salad.jpg",
  },
];

export const Menu = () => {
  console.log();
  return (
    <section className="menu-section">
      {dishes.map((dish) => {
        <MenuCard
          title={dish.title}
          price={dish.price}
          description={dish.description}
          image={dish.image}
        />;
      })}
    </section>
  );
};
