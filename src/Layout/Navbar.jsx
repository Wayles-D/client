import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Uimodal/AuthModal"; 

import EggysImg from "../assets/EggysPlaceImg.svg";
import LocationImg from "../assets/LocationImg.svg";
import DropDownImg from "../assets/DropDownImg.svg";
import CartImg from "../assets/CartImg.svg";
import LoginImg from "../assets/LoginImg.svg";

const Navbar = ({ cart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState("Location"); // ✅ Default location

  const locations = ["Lagos", "Abuja", "Benin"];

  const handleLocationChange = (newLocation) => {
    setSelectedLocation(newLocation);
  };

  const uniqueCartCount = cart.length; 

  return (
    <>
      <header className="bg-[#100101]">
        <nav className="container sm:mx-auto px-[10px] md:px-[50px] lg:px-[100px] py-[8px] flex justify-between items-center">
          
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/">
              <img src={EggysImg} alt="Eggy's Logo" className="w-[50px] h-auto" />
            </Link>
            <div className="flex items-center gap-1 md:gap-2">
              <img src={LocationImg} alt="Location" className="w-[16px] h-auto" />
              <h4 className="text-[#F0F0F0] text-[16px] md:text-[18px] font-[500]">
                {selectedLocation} {/* ✅ Dynamic Location */}
              </h4>
              <div className="dropdown dropdown-center">
                <button tabIndex={0} className="m-0 p-1 bg-transparent">
                  <img src={DropDownImg} alt="Dropdown" className="w-[12px] md:w-[16px]" />
                </button>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-40 p-2 shadow-sm">
                  {locations.map((location, index) => (
                    <li key={index} onClick={() => handleLocationChange(location)}>
                      <a>{location}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-[280px]">
            <form>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-[40px] rounded-[20px] outline-none bg-[#F0F0F0] placeholder:text-gray-950 ps-[15px] border font-[400] text-[14px]"
              />
            </form>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <ul className="flex items-center gap-2">
              
              <li className="flex items-center h-[40px] px-[15px] bg-[#B67B0F] rounded-[20px]">
                <img src={CartImg} alt="Cart" className="w-[18px] h-auto" />
                <Link to="Cart" className="px-2 text-[#FBFBFB] font-[500] text-[14px]">
                  <span className="hidden md:inline-block">Cart &nbsp;</span> 
                  <span className="cart-badge">{uniqueCartCount}</span>
                </Link>
              </li>

              <li
                className="flex items-center h-[40px] px-[15px] bg-[#F0F0F0] rounded-[20px] cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <img src={LoginImg} alt="Login" className="w-[16px] h-auto" />
                <span className="ps-2 text-[#100101] font-[500] text-[14px] hidden md:inline">
                  Login
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default Navbar;
