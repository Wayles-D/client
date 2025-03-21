import React, { createContext, useState, useEffect, useRef } from "react";

const CartContext = createContext();

const cartItemsFromLocalStorage = () => JSON.parse(localStorage.getItem("cart")) || [];

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItemsFromLocalStorage);
  const firstRender = useRef(true); // Prevent first render issue

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  let handleAddToCart = (product) => {
    const productSelected = cart.find((singleCart) => singleCart._id === product._id);
    
    if (productSelected) {
      setCart(
        cart.map((oneItem) =>
          oneItem._id === product._id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ handleAddToCart, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
