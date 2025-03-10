import React, { useState, useEffect } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";
import SortDropdown from "../../Component/SortDropdown/SortDropdown";
import productsData from "../../data/products";
import CategoryBanner from "../../Component/CatagoryBanner/CategoryBanner";

const Personalcare = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    // Load products from JSON and filter for Personal Care category
    const personalCareProducts = productsData.filter(
      (product) => product.category === "Personal Care"
    );

    setProducts(personalCareProducts);
    setFilteredProducts(personalCareProducts);
  }, []);

  const handleSort = (order) => {
    let sortedProducts = [...products]; // Use original data, not filteredProducts

    switch (order) {
      case "asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedProducts = [...products];
    }

    setSortOrder(order);
    setFilteredProducts(sortedProducts);
  };

  return (
    <>
   <div>
      <CategoryBanner 
        title="Personal Care" 
        imageSrc="Personalcare_banner.png" 
        texts={[
            ["Self-Care is Self-Love!", "Tailored personal care solutions to make you feel your best!"],
            ["Self-Care, Every Day!", "Feel fresh, feel empowered."],
            ["Because You Deserve the Best!","Personal care tailored for you."],
            ["Confidence Starts with Care!","Elevate your routine, embrace self-love."],
            ["Feel Good, Look Good!","Self-care that empowers every woman."]
        ]} 
      />
    </div>

      {/* Sort Dropdown */}
      <div className="flex justify-end mt-4 mb-6 px-5">
        <SortDropdown handleSort={handleSort} />
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-lg col-span-4">No personal care products available.</p>
        )}
      </div>
   
    </>
  );
};

export default Personalcare;