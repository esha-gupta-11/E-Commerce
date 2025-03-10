import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../Context/StoreContext";
import { FaTimes } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, getTotalCartAmount, removeFromCart, addToCart } = useStore();

  const totalAmount = useMemo(() => Number(getTotalCartAmount()).toFixed(2), [cart]);

  return (
    <div className="fixed top-16 right-0 w-[400px] bg-white shadow-2xl p-6 overflow-y-auto z-[100]">
      <div className="flex justify-between items-center border-b pb-3">
        <h1 className="text-2xl font-semibold">Your cart</h1>
        <button className="text-xl font-bold text-black" onClick={() => navigate(-1)}>
          <FaTimes />
        </button>
      </div>

      {cart.length > 0 ? (
        <div className="space-y-6 mt-4">
          {cart.map((item) => (
            <div key={item.uniqueId} className="flex items-center gap-4 border-b pb-3">
              {/* ✅ Ensure unique image for each product */}
              <img
                className="w-20 h-20 object-cover rounded-md"
                src={item.image_link || "/fallback-image.png"}
                alt={item.name}
                onError={(e) => (e.currentTarget.src = "/fallback-image.png")}
              />
              <div className="flex-1">
                <h2 className="text-sm font-medium text-gray-900">{item.name}</h2>
                <p className="text-xs text-gray-500">
                  ₹{item.price ? Number(item.price).toFixed(2) : "0.00"} × {item.quantity}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <button className="border px-2 py-1" onClick={() => removeFromCart(item.id)}>−</button>
                  <span>{item.quantity}</span>
                  <button className="border px-2 py-1" onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-800">
                ₹{(Number(item.price) || 0 * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">Your cart is empty...</p>
      )}

      {cart.length > 0 && (
        <>
          <div className="mt-6 border-t pt-4">
            <h2 className="text-lg font-semibold">Estimated total</h2>
            <p className="text-2xl font-bold text-gray-900">₹{totalAmount}</p>
            <p className="text-xs text-gray-500">Tax included and shipping calculated at checkout.</p>
          </div>
          <button
            className="w-full mt-4 bg-black text-white py-3 rounded-lg font-medium text-sm shadow-md hover:bg-gray-800 transition"
            onClick={() => navigate("/Order")}
          >
            BUY NOW →
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
