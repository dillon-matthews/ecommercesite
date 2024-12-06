import shirtImage from "../assets/shirt.jpg";
import jeansImage from "../assets/jeans.jpg";
import sneakersImage from "../assets/sneakers.jpg";

export const initialProducts = [
  {
    id: 1,
    name: "Basic T-Shirt",
    price: 19.99,
    image: shirtImage,
    published: true,
  },
  {
    id: 2,
    name: "Premium Jeans",
    price: 89.99,
    image: jeansImage,
    published: true,
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: 79.99,
    image: sneakersImage,
    published: true,
  },
];
