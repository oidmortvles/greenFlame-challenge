import { create } from 'zustand';
import { Car } from './CarsInterface';

interface carChoise {
  selectedCars: Car[];
  addCar: (car: Car) => void;
  removeCar: (carId: string) => void;
}

export const useFilterChoise = create<carChoise>((set, get) => ({
  selectedCars: [],

  addCar: (car) => {
    const { selectedCars } = get();
    if (!selectedCars.find(c => c.code === car.code)) {
      set({ selectedCars: [...selectedCars, car] });
    }
  },

  removeCar: (carId) => {
    const { selectedCars } = get();
    set({
      selectedCars: selectedCars.filter(car => car.code !== carId),
    });
  },
}));
