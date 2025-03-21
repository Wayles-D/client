import { useState } from "react";
import CheeseBurger from "./Cheeseburger";
import Combos from "./Combos";
import Drinks from "./Drinks";
import Chicken from "./Chicken";
import Chips from "./Chips";
import Salads from "./Salads";
import { toast } from "sonner"; // ✅ Import Sonner

const FoodTypes = ({ handleAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState("burger"); // Default: Burger

  const categories = [
    { name: "burger", label: "Burger", img: "BurgerImg_wohjmv.svg" },
    { name: "combos", label: "Combos", img: "image_5_kdq3cl.svg" },
    { name: "drinks", label: "Drinks", img: "DrinksImg_xjtpgr.svg" },
    { name: "chicken", label: "Chicken", img: "ChickenImg_qug0id.svg" },
    { name: "chips", label: "Chips", img: "ChipsImg_z8hgkf.svg" },
    { name: "salads", label: "Salads", img: "SaladsImg_cgkodf.svg" },
  ];

  return (
    <main className="bg-[#2e2e2e]">
      {/* Category Selector */}
      <div className="carousel carousel-center rounded-[101px] bg-[#252422] overflow-x-auto space-x-1 md:overflow-visible max-w-[90%] md:max-w-[85%] mx-auto px-4 md:px-12 lg:px-24 py-2 flex justify-between items-center mt-2">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className="carousel-item flex flex-col items-center cursor-pointer transition-all duration-300"
          >
            <img
              className={`h-20 transition-all duration-300 ${
                activeCategory === category.name
                  ? "brightness-150 scale-110"
                  : "brightness-75 hover:brightness-125 hover:scale-105"
              }`}
              src={`https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212189/${category.img}`}
              alt={`${category.label}-Img`}
            />
            <p className="text-center text-white">{category.label}</p>
          </div>
        ))}
      </div>

      {/* Conditionally Render Components */}
      <div className="mt-4">
        {activeCategory === "burger" && (
          <CheeseBurger
            handleAddToCart={(product) => {
              handleAddToCart(product);
              toast.success(`${product.title} added to cart 🛍️`); // ✅ Show toast here too
            }}
          />
        )}
        {activeCategory === "combos" && (
          <Combos
            handleAddToCart={(product) => {
              handleAddToCart(product);
              toast.success(`${product.title} added to cart 🛍️`);
            }}
          />
        )}
        {activeCategory === "drinks" && (
          <Drinks
            handleAddToCart={(product) => {
              handleAddToCart(product);
              toast.success(`${product.title} added to cart 🛍️`);
            }}
          />
        )}
        {activeCategory === "chicken" && (
          <Chicken
            handleAddToCart={(product) => {
              handleAddToCart(product);
              toast.success(`${product.title} added to cart 🛍️`);
            }}
          />
        )}
        {activeCategory === "chips" && (
          <Chips
            handleAddToCart={(product) => {
              handleAddToCart(product);
              toast.success(`${product.title} added to cart 🛍️`);
            }}
          />
        )}
        {activeCategory === "salads" && (
          <Salads
            handleAddToCart={(product) => {
              handleAddToCart(product);
              toast.success(`${product.title} added to cart 🛍️`);
            }}
          />
        )}
      </div>
    </main>
  );
};

export default FoodTypes;
