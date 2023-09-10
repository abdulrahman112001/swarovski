// productStore.ts
import create from 'zustand';

type Product = {
  id: number;
  name: string;
  price: number;
  count: number;
};

type ProductStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  incrementProductCount: (productId: number) => void;
  decrementProductCount: (productId: number) => void;
};

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, { ...product, count: 0 }],
      
    })),
  removeProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
  incrementProductCount: (productId) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? { ...product, count: product.count + 1 }
          : product
      ),
    })),
  decrementProductCount: (productId) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      ),
    })),
}));

export default useProductStore;
