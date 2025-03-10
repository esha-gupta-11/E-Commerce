import { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";
import SortDropdown from "../../Component/SortDropdown/SortDropdown";
import productsData from "../../data/products";
import CategoryBanner from "../../Component/CatagoryBanner/CategoryBanner";

const SkinCare = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load products from JSON and filter for SkinCare category
    const skinCareProducts = productsData.filter(
      (product) => product.category === "Skin Care"
    );

    setProducts(skinCareProducts);
    setFilteredProducts(skinCareProducts);
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
        sortedProducts.sort(
          (a, b) => new Date(b.date_added) - new Date(a.date_added)
        );
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
    <>
      <div>
        <CategoryBanner
          title="Skin Care"
          imageSrc="Skincareimg.png"
          texts={[
            [
              "Glow Naturally, Shine Fearlessly!",
              "Pamper your skin with the care it deserves.",
            ],
            [
              "Glow Naturally, Radiate Confidence!",
              "Your skin deserves the best.",
            ],
            [
              "Hydrate. Nourish. Glow!",
              "Elevate your skincare routine with the finest.",
            ],
            [
              "Love Your Skin, Love Yourself!",
              "Pampering made simple and effective.",
            ],
            [
              "Glow Up, Naturally!",
              "Because your skin deserves the best care.",
            ],
          ]}
        />
      </div>

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
            <p className="text-center text-lg col-span-4">
              No skincare products available.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default SkinCare;
