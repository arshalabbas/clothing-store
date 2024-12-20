import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  title: string;
  image: string;
  price: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartAction {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
}

type CartStore = CartState & CartAction;

export const useCart = create<CartStore>()(
  persist<CartStore>(
    (set) => ({
      items: [],
      addItem: (item) => {
        set((state) => ({
          items: [...state.items, item],
        }));
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },
      clearItems: () => {
        set({ items: [] });
      },
    }),
    { name: "_cart" },
  ),
);
