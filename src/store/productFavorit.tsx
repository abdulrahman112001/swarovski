// productStore.ts
import create from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
  desc: string;
};

type ProductStore = {
  products: Product[];
  totalPrice: number; // New property for total price
  addProductFavorit: (product: Product) => void;
  removeProductFavorit: (productId: number) => void;
  incrementProductCount: (productId: number) => void;
  decrementProductCount: (productId: number) => void;
};

// Move the initialization of initialProducts and initialTotalPrice outside the create function
const initialProducts = JSON.parse(localStorage.getItem("products")) || [];
const initialTotalPrice = parseFloat(localStorage.getItem("totalPrice")) || 1;

const useProductFavoritStore = create<ProductStore>((set) => ({
  products: initialProducts, // Initialize with the products from local storage
  totalPrice: initialTotalPrice, // Initialize total price
  addProductFavorit: (product) =>
    set((state) => {
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        // إذا وُجد منتج بنفس الـ id، زيادة count فقط
        const updatedProducts = state.products.map((p) =>
          p.id === product.id ? { ...p, count: p.count + 1 } : p
        );

        // حفظ المنتجات المحدثة في Local Storage
        localStorage.setItem("products", JSON.stringify(updatedProducts));

        // حساب وحفظ السعر الإجمالي بعد التحديث في Local Storage
        const updatedTotalPrice = calculateTotalPrice(updatedProducts);
        localStorage.setItem("totalPrice", updatedTotalPrice.toString());

        return {
          products: updatedProducts,
          totalPrice: updatedTotalPrice, // تحديث السعر الإجمالي
        };
      } else {
        // إذا لم يتم العثور على منتج بنفس الـ id، قم بإضافة المنتج إلى السلة
        const updatedProducts = [...state.products, { ...product, count: 1 }];

        // حفظ المنتجات المحدثة في Local Storage
        localStorage.setItem("products", JSON.stringify(updatedProducts));

        // حساب وحفظ السعر الإجمالي بعد التحديث في Local Storage
        const updatedTotalPrice = calculateTotalPrice(updatedProducts);
        localStorage.setItem("totalPrice", updatedTotalPrice.toString());

        return {
          products: updatedProducts,
          totalPrice: updatedTotalPrice, // تحديث السعر الإجمالي
        };
      }
    }),

  removeProductFavorit: (productId) =>
    set((state) => {
      const removedProduct = state.products.find(
        (product) => product.id === productId
      );
      if (!removedProduct) return state;

      const updatedProducts = state.products.filter(
        (product) => product.id !== productId
      );
      // حفظ المنتجات المحدثة في Local Storage
      localStorage.setItem("products", JSON.stringify(updatedProducts));

      // حساب وحفظ السعر الإجمالي بعد الإزالة في Local Storage
      const updatedTotalPrice = calculateTotalPrice(updatedProducts);
      localStorage.setItem("totalPrice", updatedTotalPrice.toString());

      return {
        products: updatedProducts,
        totalPrice: updatedTotalPrice, // Update the total price
      };
    }),
  incrementProductCount: (productId) =>
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === productId
          ? { ...product, count: product.count + 1 }
          : product
      );
      // حفظ المنتجات المحدثة في Local Storage
      localStorage.setItem("products", JSON.stringify(updatedProducts));

      // حساب وحفظ السعر الإجمالي بعد التحديث في Local Storage
      const updatedTotalPrice = calculateTotalPrice(updatedProducts);
      localStorage.setItem("totalPrice", updatedTotalPrice.toString());

      return {
        products: updatedProducts,
        totalPrice: updatedTotalPrice, // Update the total price
      };
    }),
  decrementProductCount: (productId) =>
    set((state) => {
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );
      if (productToUpdate && productToUpdate.count > 0) {
        const updatedProducts = state.products.map((product) =>
          product.id === productId
            ? { ...product, count: product.count - 1 }
            : product
        );
        // حفظ المنتجات المحدثة في Local Storage
        localStorage.setItem("products", JSON.stringify(updatedProducts));

        // حساب وحفظ السعر الإجمالي بعد التحديث في Local Storage
        const updatedTotalPrice = calculateTotalPrice(updatedProducts);
        localStorage.setItem("totalPrice", updatedTotalPrice.toString());

        return {
          products: updatedProducts,
          totalPrice: updatedTotalPrice, // Update the total price
        };
      }
      return state;
    }),
}));

export default useProductFavoritStore;

// Function to calculate the total price
export function calculateTotalPrice(products: Product[]) {
  return products.reduce((total, product) => total + product.price * product.count, 0);
}
