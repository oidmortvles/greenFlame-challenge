import { create } from 'zustand';

interface PassengerStore {
  passengers: number[];
  selected: number[];
  setPassenger: (items: number[]) => void;
  selectPassenger: (item: number) => void;
  deletePassenger: (item: number) => void;
}

export const useFilterPassenger = create<PassengerStore>((set, get) => ({
  passengers: [],
  selected: [],

  setPassenger: (items) => set({ passengers: items }),

  selectPassenger: (item) => {
    const { selected } = get();
    if (!selected.includes(item)) {
      set({ selected: [...selected, item] });
    }
  },

  deletePassenger: (item) => {
    const { selected } = get();
    set({ selected: selected.filter((i) => i !== item) });
  },
}));
