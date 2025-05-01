import { create } from "zustand";

const useStore = create((set, get) => ({
  cart: [],
  wishlist: [], // ✅ Wishlist state added

  addToCart: (product) =>
    set((state) => {
      const productId = product.id || product._id || product.sku || product.name;

      if (!productId) {
        console.error("Product ID is missing:", product);
        return state;
      }

      const existingItem = state.cart.find((item) => item.uniqueId === productId);

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.uniqueId === productId ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1, uniqueId: productId }],
      };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.uniqueId === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),

  getTotalCartAmount: () =>
    get().cart.reduce((total, item) => total + (Number(item.price) || 0) * item.quantity, 0),

  // ✅ Wishlist Functions
  addToWishlist: (product) =>
    set((state) => {
      const productId = product.id || product._id || product.sku || product.name;
      if (!productId) return state;

      // Check if product already exists
      const exists = state.wishlist.some((item) => item.uniqueId === productId);
      if (exists) return state;

      return { wishlist: [...state.wishlist, { ...product, uniqueId: productId }] };
    }),

  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.uniqueId !== productId),
    })),

  isProductInWishlist: (productId) =>
    get().wishlist.some((item) => item.uniqueId === productId),
}));

export default useStore;
