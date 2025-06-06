import { create } from 'zustand';

interface CompanyStore {
  companys: string[];
  selected: string[];
  setCompanies: (items: string[]) => void;
  selectCompany: (item: string) => void;
  deleteCompany: (item: string) => void;
}

export const useFilterCompany = create<CompanyStore>((set, get) => ({
  companys: [],
  selected: [],
  
  setCompanies: (items) => set({ companys: items }),

  selectCompany: (item) => {
    const { selected } = get();
    if (!selected.includes(item)) {
      set({ selected: [...selected, item] });
    }
  },

  deleteCompany: (item) => {
    const { selected } = get();
    set({ selected: selected.filter((i) => i !== item) });
  },
}));
