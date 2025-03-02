import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const items = [
   
   
    
  ];

  const totalPrice = items.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        🛒 Your Shopping Cart
      </h1>

      {items.length > 0 ? (
        <div className="space-y-4 overflow-y-auto max-h-[400px] pr-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-3">
              <img
                className="w-20 h-20 object-cover rounded-md"
                src={item.image || item.image_link}
                alt={item.name}
              />
              <div className="flex-1">
                <h2 className="text-sm font-medium text-gray-900 line-clamp-2">{item.name}</h2>
                <p className="text-xs text-gray-500">
                  ₹{item.price} × {item.quantity || 1}
                </p>
              </div>
              <p className="text-sm font-semibold text-gray-800">₹{item.price * (item.quantity || 1)}</p>
            </div>
          ))}
        </div>
      ) : (



        <p className="text-center text-gray-500">Your cart is empty....</p>
      )}

      {items.length > 0 && (
        <>
          <div className="flex justify-between items-center mt-4 border-t pt-3">
            <h2 className="text-sm font-semibold text-gray-800">Total</h2>
            <p className="text-sm font-semibold text-gray-900">₹{totalPrice}</p>
          </div>

          <button
            className="w-full mt-4 bg-black text-white py-2 rounded-lg font-medium text-sm shadow-md hover:bg-gray-800 transition"
            onClick={() => navigate("/Order")}
          >
            Proceed to Checkout →
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
