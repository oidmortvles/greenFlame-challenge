import { useFilterCategory } from './filterCategory';
import { useFilterCompany } from './filterCompany';
import { useFilterPassenger } from './filterPassenger';
import { useFilterPrice } from './filterPrice';
import { useFilterSuitcase } from './filterSuitcase';

import rawCars from '../store/carsJSON.json';
import type { Root } from '../store/CarsInterface';

const CARS: Root = rawCars as Root;

export const useFilterResult = () =>{

    const allCarsArrays = Object.values(CARS.cars);
    const allCars = allCarsArrays.flat();

    const {selected: selectedCategory} = useFilterCategory();
    const {selected: selectedCompany} = useFilterCompany();
    const {selected: selectedPassenger} = useFilterPassenger();
    const {selected: selectedPrice} = useFilterPrice();
    const {selected: selectedSuitcase} = useFilterSuitcase();

    const company = (number: number) =>{
       switch (number) {
          case 1:
            return 'Avis';
          case 2:
            return 'Budget';
          case 3:
            return 'Payless';  
          
          default: return 'Avis';
       } 
    }

    const filteredCars = allCars.filter((car) => {
       
        const matchCompany = selectedCompany.length === 0 || selectedCompany.includes(company(car.brand));
        const matchCategory = selectedCategory.length === 0 || selectedCategory.includes(car.features.category);                
        const matchSuitcase = selectedSuitcase.length === 0 || selectedSuitcase.includes(car.features.large_suitcase) || selectedSuitcase.includes(car.features.small_suitcase);                
        const matchPassenger = selectedPassenger.length === 0 || selectedPassenger.includes(car.features.seats.toString());

        const matchPrice = selectedPrice.length === 0 || (car.price >= selectedPrice[0] && car.price <= selectedPrice[1]);

        return matchCategory && matchCompany && matchPassenger && matchPrice && matchSuitcase;
    });

  return filteredCars;
}