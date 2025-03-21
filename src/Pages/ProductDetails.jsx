import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FoodCategories from "../JsFolders/FoodCategories";
import Star from "../assets/Star.svg";
import { Toaster, toast } from "sonner";

const ProductDetails = ({ handleAddToCart }) => {
  const { id } = useParams();

  // Find the product by searching through all categories
  const product = FoodCategories.flatMap((category) => category.items).find(
    (item) => String(item._id) === id
  );

  if (!product) {
    return <h2 className="text-center text-white mt-10">Product not found</h2>;
  }

  // Get the category of the current product
  const productCategory = FoodCategories.find((category) =>
    category.items.some((item) => item._id === product._id)
  );

  // State for related products (to prevent re-randomization)
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (productCategory) {
      const filteredProducts = productCategory.items.filter(
        (item) => item._id !== product._id
      );

      // Shuffle once and store in state
      setRelatedProducts(filteredProducts.sort(() => 0.5 - Math.random()).slice(0, 3));
    }
  }, [id]); // Runs only when `id` changes

  return (
    <section className="container mx-auto px-[10px] md:px-[50px] lg:px-[100px] py-[4px]">
      <Toaster position="bottom-right" richColors /> {/* Sonner Toaster */}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-[450px] rounded-lg shadow-md mt-5"
          />
        </div>

        {/* Product Description */}
        <div>
          <h1 className="text-3xl lg:text-4xl text-white font-semibold">{product.title}</h1>
          <p className="mt-4 text-white text-sm lg:text-base">{product.description}</p>
          <button
            onClick={() => {
              handleAddToCart(product);
              toast.success(`${product.title} added to cart!`);
            }}
            className="mt-6 w-full max-w-[300px] h-12 rounded-[31px] bg-[#B67B0F] text-white font-bold border-none shadow-none cursor-pointer hover:bg-[#9a640c] transition duration-300"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Similar Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-12 mb-5">
          <h2 className="text-2xl text-white font-semibold mb-6">Others You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedProducts.map((item) => (
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
                      onClick={() => {
                        handleAddToCart(item);
                        toast.success(`${item.title} added to cart!`);
                      }}
                      className="w-full h-12 rounded-[31px] bg-[#B67B0F] text-white font-bold border-none shadow-none cursor-pointer"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
