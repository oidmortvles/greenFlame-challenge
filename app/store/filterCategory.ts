import { create } from 'zustand';

interface CategoryStore {
  categories: string[];
  selected: string[];
  setCategories: (items: string[]) => void;
  selectCategory: (item: string) => void;
  deleteCategory: (item: string) => void;
}

export const useFilterCategory = create<CategoryStore>((set, get) => ({
  categories: [],
  selected: [],

  setCategories: (items) => set({ categories: items }),

  selectCategory: (item) => {
    const { selected } = get();
    if (!selected.includes(item)) {
      set({ selected: [...selected, item] });
    }
  },

  deleteCategory: (item) => {
    const { selected } = get();
    set({ selected: selected.filter((i) => i !== item) });
  },
}));
