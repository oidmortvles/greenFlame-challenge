import { create } from 'zustand';

interface SuitcaseStore {
  suitcases: number[];
  selected: number[];
  setSuitcases: (items: number[]) => void;
  selectSuitcase: (item: number) => void;
  deleteSuitcase: (item: number) => void;
}

export const useFilterSuitcase = create<SuitcaseStore>((set, get) => ({
  suitcases: [],
  selected: [],

  setSuitcases: (items) => set({ suitcases: items }),

  selectSuitcase: (item) => {
    const { selected } = get();
    if (!selected.includes(item)) {
      set({ selected: [...selected, item] });
    }
  },

  deleteSuitcase: (item) => {
    const { selected } = get();
    set({ selected: selected.filter((i) => i !== item) });
  },
}));
