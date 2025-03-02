import { useState } from "react";
import { Heart, Plus, Minus } from "lucide-react";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => setQuantity(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 0);

  return (
    <div className="flex justify-center">
      <div className="rounded-2xl shadow-lg transition-all duration-300 cursor-pointer w-full sm:w-[270px] bg-white hover:shadow-xl flex flex-col relative mx-auto overflow-hidden">
        
        {/* 🔹 Image & Wishlist Button */}
        <div className="relative h-[220px]">
          <img
            src={product.image_link}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            className="absolute top-2 right-2 p-2 rounded-full cursor-pointer hover:scale-110 transition-all  "
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`w-6 h-6 ${liked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </button>
        </div>

        {/* 🔹 Product Details */}
        <div className="p-4 text-start space-y-2">
          <p className="text-xs font-semibold text-gray-500 uppercase">{product.category}</p>
          <h2 className="text-base font-semibold text-gray-800">{product.name}</h2>
          <p className="text-xs text-gray-600">{product.description}</p>
          <p className="text-md font-bold">Rs. <span className="text-black">{product.price}</span></p>

          {/* 🔹 Quantity Controls & Add to Cart */}
          {quantity === 0 ? (
            <button
              className="bg-black text-white px-4 py-2 text-sm rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition-all w-full mt-2"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          ) : (
            <div className="flex items-center justify-between border rounded-lg p-2 w-full bg-gray-100">
              <button className="text-gray-600 px-2 hover:text-black" onClick={decreaseQuantity}>
                <Minus size={18} />
              </button>
              <span className="text-sm font-semibold">{quantity}</span>
              <button className="text-gray-600 px-2 hover:text-black" onClick={increaseQuantity}>
                <Plus size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
