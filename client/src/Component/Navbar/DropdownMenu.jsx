import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const DropdownMenu = ({ title, mainPath, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li
      className="relative z-50 mb-1"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={dropdownRef}
    >
      {/* 🔹 Main Category (Click navigates, hover shows dropdown) */}
      <NavLink
        to={mainPath}
        className="cursor-pointer hover:text-gray-500 transition block"
      >
        {title}
      </NavLink>

      {/* 🔹 Dropdown Menu */}
      {isOpen && (
        <motion.ul
          className="absolute left-0 mt-2 w-70 bg-white shadow-lg rounded-lg py-2 z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {items.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <NavLink
                to={item.path}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:font-bold whitespace-nowrap"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      )}
    </li>
  );
};

export default DropdownMenu;
