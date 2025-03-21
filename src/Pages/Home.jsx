import React from "react";
import Hero from "./Hero";
import FoodTypes from "./FoodTypes";

const Home = ({ cart, handleAddToCart }) => {  
  return (
    <>
      <Hero />
      <FoodTypes cart={cart} handleAddToCart={handleAddToCart} /> {/* ✅ Only render FoodTypes */}
    </>
  );
};

export default Home;
