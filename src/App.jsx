import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import { Home } from "./Routes/Routes";
import { Suspense, useState, useEffect } from "react";
import Footer from "./Layout/Footer";
import LoadingRing from "./Utils/Loader";
import ProductDetails from "./Pages/ProductDetails";
import FoodTypes from "./Pages/FoodTypes";
import { Toaster, toast } from "sonner";
import Cart from "./Pages/Cart";
import CartContext from "./Context/CartContext";  // ✅ Import CartContext

function App() {
  const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(cartItemsFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    const productSelected = cart.find((item) => item._id === product._id);
    
    if (productSelected) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    toast.dismiss();
    toast(`${product.title} added to cart`, { position: "bottom-right" });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, handleAddToCart }}>  
      <BrowserRouter>
        <Toaster position="bottom-right" />
        <Suspense fallback={<div className="flex justify-center items-center h-screen"><LoadingRing /></div>}>
          <Navbar cart={cart} />
          <Routes>
            {/* ✅ Pass handleAddToCart to required pages */}
            <Route path="/" element={<Home cart={cart} handleAddToCart={handleAddToCart} />} />
            <Route path="/product/:id" element={<ProductDetails cart={cart} handleAddToCart={handleAddToCart} />} />
            <Route path="/foodtypes" element={<FoodTypes cart={cart} handleAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<Cart />} />  
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
