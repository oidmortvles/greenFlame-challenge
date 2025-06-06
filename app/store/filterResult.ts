import CARS from './carsJSON.json';
import { useFilterCategory } from './filterCategory';
import { useFilterCompany } from './filterCompany';
import { useFilterPassenger } from './filterPassenger';
import { useFilterPrice } from './filterPrice';
import { useFilterSuitcase } from './filterSuitcase';

export const useFilterResult = () =>{

    const {selected: selectedCategory} = useFilterCategory();
    const {selected: selectedCompany} = useFilterCompany();
    const {selected: selectedPassenger} = useFilterPassenger();
    const {selected: selectedPrice} = useFilterPrice();
    const {selected: selectedSuitcase} = useFilterSuitcase();

    const filteredCars = CARS.filter((car) => {
       
        const matchCategory = selectedCategory.length === 0 || selectedCategory.includes(car.seats);
        const matchCompany = selectedCompany.length === 0 || selectedCompany.includes(car.company);        
        const matchPassenger = selectedPassenger.length === 0 || selectedPassenger.includes(car.seats);
        const matchPrice = selectedPrice.length === 0 || (car.price >= selectedPrice[0] && car.price <= selectedPrice[1]);
        const matchSuitcase = selectedSuitcase.length === 0 || selectedSuitcase.includes(car.suitcases);

        return matchCategory && matchCompany && matchPassenger && matchPrice && matchSuitcase;
    });

  return filteredCars;
}