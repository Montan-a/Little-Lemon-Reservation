import { Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react";

export const MenuCard = ({ title, price, description, image }) => {
  return (
    <Card w="40rem">
      <CardHeader>
        <img src={image} alt="Menu item" loading="lazy" className="dish-img" />
        <div className="sm-flex-box">
          <span className="dish-title">{title}</span>
          <span className="dish-price">{price}</span>
        </div>
      </CardHeader>
      <CardBody>
        <p className="dish-description">{description}</p>
      </CardBody>
      <CardFooter>
        <button className="order-btn">Order for delivery</button>
      </CardFooter>
    </Card>
  );
};
