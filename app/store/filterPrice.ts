import { create } from 'zustand';

interface PriceStore {
  prices: string[];
  selected: string[];
  setPrices: (items: string[]) => void;
  selectItem: (item: string) => void;
  deleteItem: (item: string) => void;
}

export const useFilterPrice = create<PriceStore>((set, get) => ({
  prices: [],
  selected: [],

  setPrices: (items) => set({ prices: items }),

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
