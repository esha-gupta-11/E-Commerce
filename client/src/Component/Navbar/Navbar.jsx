import React, { useState, useRef, useEffect } from "react";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../../Pages/Cart/Cart";
import ProfileMenu from "../../Pages/Profile/ProfileMenu";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [wishlistClicked, setWishlistClicked] = useState(false); // State for Wishlist click
  const cartRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  // Cart Hover
  const handleCartEnter = () => setShowCart(true);
  const handleCartLeave = () => setShowCart(false);

  // Profile Hover
  const handleProfileEnter = () => setShowProfile(true);
  const handleProfileLeave = () => setShowProfile(false);

  // Click outside to close menus only if no selection is made
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target) && showCart) {
        setShowCart(false);
      }

      if (profileRef.current && !profileRef.current.contains(event.target) && showProfile) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCart, showProfile]);

  // Handle logo click to navigate to the home page and scroll to the top
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle Wishlist click to navigate to the Wishlist page and change icon color
  const handleWishlistClick = () => {
    setWishlistClicked(true);
    navigate("/wishlist");
  };

  return (
    <nav className="fixed top-[44.3px] left-0 w-full bg-white/30 backdrop-blur-lg shadow-md z-[100]">
      <div className="flex justify-between items-center px-6 sm:px-10 py-3">
        {/* Logo with click event */}
        <img
          className="h-10 sm:h-12 cursor-pointer"
          src="/Sora.png"
          alt="logo"
          onClick={handleLogoClick}
        />

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-6 lg:gap-10">
          {[
            { name: "SkinCare", path: "/skinCare" },
            { name: "Hygiene", path: "/hygiene" },
            { name: "Personal Care", path: "/personalcare" },
            { name: "Hair Care", path: "/haircare" },
            { name: "Lip Care", path: "/lipcare" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink to={item.path} className="hover:text-gray-500 transition">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons Section */}
        <div className="flex gap-5 sm:gap-7 relative items-center">
          <SearchBar />

          {/* Wishlist */}
          <FaHeart
            className={`text-lg sm:text-xl cursor-pointer transition ${
              wishlistClicked ? "text-gray-700" : "hover:text-gray-700"
            }`}
            onClick={handleWishlistClick}
          />

          {/* Cart Section */}
          <div
            className="relative"
            ref={cartRef}
            onMouseEnter={handleCartEnter}
            onMouseLeave={handleCartLeave}
          >
            <FaShoppingCart className="text-lg sm:text-xl cursor-pointer hover:text-gray-700 transition" />
            {showCart && (
              <div className="absolute right-0 mt-2 w-64 sm:w-80 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <Cart />
              </div>
            )}
          </div>

          {/* Profile Section */}
          <div
            className="relative"
            ref={profileRef}
            onMouseEnter={handleProfileEnter}
            onMouseLeave={handleProfileLeave}
          >
            <FaUser className="text-lg sm:text-xl cursor-pointer hover:text-gray-500 transition" />
            {showProfile && (
              <div className="absolute right-0 mt-2 bg-white p-3 sm:p-4 rounded-lg shadow-md">
                <ProfileMenu onClose={() => setShowProfile(false)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
