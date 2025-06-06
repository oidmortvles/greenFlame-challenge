import { create } from 'zustand';

interface SuitcaseStore {
  suitcases: number[];
  selected: number[];
  setSuitcases: (items: number[]) => void;
  selectItem: (item: number) => void;
  deleteItem: (item: number) => void;
}

export const useFilterSuitcase = create<SuitcaseStore>((set, get) => ({
  suitcases: [],
  selected: [],

  setSuitcases: (items) => set({ suitcases: items }),

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
