import React, { useState } from "react";

function OrderPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-2 gap-6">
      <div>
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mb-4" required />
          
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full p-2 border rounded" required />
          </div>
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-2 border rounded mt-4" required />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Zip Code" value={zip} onChange={(e) => setZip(e.target.value)} className="w-full p-2 border rounded" required />
          </div>
          <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded mt-4" required />

          <h2 className="text-xl font-semibold mt-6 mb-4">Payment Information</h2>
          <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full p-2 border rounded mb-4" required />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="MM/YY" value={expDate} onChange={(e) => setExpDate(e.target.value)} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} className="w-full p-2 border rounded" required />
          </div>
          
          <button type="submit" className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-700">Pay Now</button>
        </form>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="mb-4">
          <div className="flex justify-between">
            <p>Mineral Illusion Foundation</p>
            <p>₹2,200.00</p>
          </div>
          <div className="flex justify-between">
            <p>Eliminate Under Eye Liquid Concealer</p>
            <p>₹1,700.00</p>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹3,900.00</p>
          </div>
          <div className="flex justify-between text-green-600">
            <p>Order Discount</p>
            <p>- ₹780.00</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>Enter shipping address</p>
          </div>
        </div>
        <div className="border-t pt-4 font-bold flex justify-between text-xl">
          <p>Total</p>
          <p>INR ₹3,120.00</p>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
