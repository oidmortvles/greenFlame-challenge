import { create } from 'zustand';

interface PassengerStore {
  categories: number[];
  selected: number[];
  setCategories: (items: number[]) => void;
  selectItem: (item: number) => void;
  deleteItem: (item: number) => void;
}

export const useFilterPassenger = create<PassengerStore>((set, get) => ({
  categories: [],
  selected: [],

  setCategories: (items) => set({ categories: items }),

  selectItem: (item) => {
    const { selected } = get();
    if (!selected.includes(item)) {
      set({ selected: [...selected, item] });
    }
  },

  deleteItem: (item) => {
    const { selected } = get();
    set({ selected: selected.filter((i) => i !== item) });
  },
}));
