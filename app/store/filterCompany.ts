import { create } from 'zustand';

interface CompanyStore {
  categories: string[];
  selected: string[];
  setCategories: (items: string[]) => void;
  selectItem: (item: string) => void;
  deleteItem: (item: string) => void;
}

export const useFilterCompany = create<CompanyStore>((set, get) => ({
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
