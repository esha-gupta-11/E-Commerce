import { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";
import SortDropdown from "../../Component/SortDropdown/SortDropdown";
import FilterSidebar from "../../Component/FilterSidebar/FilterSidebar";
import useStore from "../../Context/StoreContext"; // ✅ Zustand store import
import productsData from "../../data/products.js";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const { addToCart, cart } = useStore(); // ✅ Zustand ka hook use kiya

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 250;
      setIsSticky(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        sortedProducts = [...products];
    }

    setSortOption(sortKey);
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="flex flex-col">
      <div
        className="fixed left-0 top-70 bg-gray-800 text-white px-2 py-2 rounded-r-lg z-50 cursor-pointer"
        onMouseEnter={() => setIsFilterOpen(true)}
        onMouseLeave={() => setIsFilterOpen(false)}
      >
        ☰
      </div>

      <div
        className={`fixed top-70 left-0 h-min w-40 bg-white p-4 z-40 transform transition-transform duration-1500 ease-in-out overflow-y-auto ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onMouseEnter={() => setIsFilterOpen(true)}
        onMouseLeave={() => setIsFilterOpen(false)}
      >
        <FilterSidebar
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
      </div>

      <div className="w-full p-5">
        <h1 className="text-center text-5xl mt-12">All Categories</h1>

        <div
          className={`transition-all duration-300 ${
            isSticky
              ? "sticky top-[108px] z-[999] h-15 bg-white px-5 py-2 "
              : "mt-4"
          } flex justify-end`}
        >
          <SortDropdown handleSort={handleSort} />
        </div>

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 px-8 mt-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={() => addToCart(product)} // ✅ Zustand function directly call kiya
              />
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">
              No products found.
            </p>
          )}
        </div>

        {/* 🛒 Cart count badge */}
        <div className="fixed top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
          {cart.length}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
