import { create } from 'zustand';

interface PassengerStore {
  passengers: number[];
  selected: number[];
  setPassenger: (items: number[]) => void;
  selectItem: (item: number) => void;
  deleteItem: (item: number) => void;
}

export const useFilterPassenger = create<PassengerStore>((set, get) => ({
  passengers: [],
  selected: [],

  setPassenger: (items) => set({ passengers: items }),

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
