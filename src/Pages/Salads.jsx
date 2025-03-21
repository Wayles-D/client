import React from "react";
import foodData from "../JsFolders/FoodCategories";
import Star from "../assets/Star.svg";
import { Link } from "react-router-dom";

const Salads = ({ handleAddToCart }) => {
  // Find the Salads category
  const saladsCategory = foodData.find((category) => category.category === "Salads");

  return (
    <main className="flex justify-center items-start container mx-auto px-[10px] md:px-[50px] lg:px-[100px] py-[4px]">
      <div className="w-full">
        <section className="mb-5 mt-0 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {saladsCategory?.items.map((item) => (
              <div
                key={item._id}
                className="card w-full max-w-[377px] shadow-sm p-4 bg-[#252422] rounded-lg mx-auto"
              >
                <figure>
                  <Link to={`/product/${item._id}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-auto rounded-[14px]"
                    />
                  </Link>
                </figure>
                <div className="card-body text-center">
                  <div className="flex justify-between items-center">
                    <h2 className="card-title text-white text-lg font-semibold">
                      {item.title}
                    </h2>
                    <div className="flex items-center border rounded border-[#B67B0F] px-2 py-1 gap-1">
                      <img className="size-4" src={Star} alt="Rating" />
                      <h6 className="text-sm text-white">{item.rating}</h6>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-white mt-2">
                    <h1 className="text-[#B67B0F] font-bold text-3xl">
                      ₦{item.price}
                    </h1>
                    <div className="flex items-center gap-2">
                      <p className="text-sm">{item.duration}</p>
                    </div>
                  </div>
                  <div className="card-actions mt-4">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full h-12 rounded-[31px] bg-[#B67B0F] text-white font-bold border-none shadow-none cursor-pointer"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Salads;
