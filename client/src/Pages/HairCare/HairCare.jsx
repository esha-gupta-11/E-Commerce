import { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";
import SortDropdown from "../../Component/SortDropdown/SortDropdown";
import productsData from "../../data/products";
import CategoryBanner from "../../Component/CatagoryBanner/CategoryBanner";


const HairCare = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load products from JSON and filter for Hair Care category
    const hairCareProducts = productsData.filter(
      (product) => product.category === "Hair Care"
    );

    setProducts(hairCareProducts);
    setFilteredProducts(hairCareProducts);
    setLoading(false);
  }, []);

  // Sorting Function
  const handleSort = (sortKey) => {
    let sortedProducts = [...filteredProducts];

    switch (sortKey) {
      case "best_selling":
        sortedProducts.sort((a, b) => b.sales - a.sales);
        break;
      case "new_arrival":
        sortedProducts.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
        break;
      case "price_low_high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_high_low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedProducts = [...products]; // Reset to original order
    }

    setSortOption(sortKey);
    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <CategoryBanner 
        title="Hair Care" 
        imageSrc="Haircare_banner.png" 
        texts={[
            ["Feel Fresh, Stay Confident!", "Gentle yet effective hygiene solutions designed just for you."],
            ["Stay Fresh, Feel Confident!", "Hygiene essentials designed just for you."],
            ["Gentle, Safe & Effective!","Because your intimate care matters."],
            ["Freshness that Empowers!","Feel clean, stay carefree all day."],
            ["Clean, Confident, Carefree!","Feel fresh, feel fabulous."]
        ]} 
      />
   
      {/* Sort Dropdown */}
      <div className="flex justify-end mt-4 mb-6 px-5">
        <SortDropdown handleSort={handleSort} />
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-lg">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-lg col-span-4">No hair care products available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HairCare;