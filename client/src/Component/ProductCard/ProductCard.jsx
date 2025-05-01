"use client";
import { useState, useEffect, useTransition, useDeferredValue } from "react";
import { Heart, Plus, Minus } from "lucide-react";
import useStore from "../../Context/StoreContext";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cart, addToWishlist, removeFromWishlist, wishlist = [] } = useStore();
  const [hovered, setHovered] = useState(false);
  const deferredImage = useDeferredValue(hovered ? product.hover_image : product.image_link);
  const [isPending, startTransition] = useTransition();
  const [optimisticQuantity, setOptimisticQuantity] = useState(0);
  const isLiked = wishlist.some((item) => item.id === product.id);

  useEffect(() => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) setOptimisticQuantity(cartItem.quantity);
  }, [cart, product.id]);

  const handleCartUpdate = (action) => {
    startTransition(() => {
      setOptimisticQuantity((prev) => (action === "add" ? prev + 1 : Math.max(prev - 1, 0)));
      action === "add" ? addToCart(product) : removeFromCart(product.id);
    });
  };

  const toggleWishlist = () => (isLiked ? removeFromWishlist(product.id) : addToWishlist(product));

  return (
    <div className="flex justify-center">
      <div
        className="rounded-2xl transition-all duration-300 cursor-pointer w-full sm:w-[260px] bg-white hover:shadow-lg hover:scale-105 flex flex-col relative mx-auto overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative h-[200px] transition-all duration-40 ease-out">
          <img
            src={deferredImage}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-200 ${isPending ? "opacity-50" : "opacity-100"}`}
          />
          <button
            className="absolute top-2 right-2 p-1 rounded-full cursor-pointer hover:scale-110 transition-all"
            onClick={toggleWishlist}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </button>
        </div>

        <div className="p-3 text-start space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase">{product.category}</p>
          <h2 className="text-sm font-semibold text-gray-800">{product.name}</h2>
          <p className="text-xs text-gray-600 h-10 overflow-hidden">{product.description}</p>
          <p className="text-sm font-bold">Rs. <span className="text-black">{product.price}</span></p>

          {optimisticQuantity === 0 ? (
            <button
              className="bg-black text-white px-3 py-3 text-xs rounded-lg cursor-pointer hover:bg-white hover:text-black hover:text-xs hover:border-2 hover:border-black transition-all w-full"
              onClick={() => handleCartUpdate("add")}
            >
              ADD TO CART
            </button>
          ) : (
            <div className="flex items-center h-10 justify-between border rounded-lg p-1 w-full bg-gray-100">
              <button className="text-gray-600 px-1 hover:text-black" onClick={() => handleCartUpdate("remove")}>
                <Minus size={18} />
              </button>
              <span className="text-sm font-semibold">{optimisticQuantity}</span>
              <button className="text-gray-600 px-1 hover:text-black" onClick={() => handleCartUpdate("add")}>
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
