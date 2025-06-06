import FilterAside from './FiltersAside';
import ListCars from './ListCars';
import styles from './MainContent.module.css';

import rawCars from '../store/carsJSON.json';
import type { Root } from '../store/CarsInterface';

const CARS: Root = rawCars as Root;

const MainContent : React.FC = () => {
  
    //=> TODOS LO AUTOS
    const allCarsArrays = Object.values(CARS.cars);
    const allCars = allCarsArrays.flat();
    
    //=> CATEGORIAS
    const allCategories = allCars.map(car => car.features.category);
    const uniqueCategories = Array.from(new Set(allCategories));

    //=> COMPAÑIAS
    const allCompanies = Object.keys(CARS.cars); 

    //=> PASAJEROS
    const allPassengers = allCars.map(car => car.features.seats);
    const allPassengersStr = allPassengers.map(val => val.toString());
    const uniquePassengers = Array.from(new Set(allPassengersStr))

    //=> PRECIOS
    const allPrices = allCars.map(car => car.rates.price);

    //=> MALETAS
    const allSuitcaseValues = allCars.flatMap(car => [
    car.features.large_suitcase,
    car.features.small_suitcase
    ]);
    const cleanedSuitcaseValues = allSuitcaseValues.filter(val => val !== null).map(val => Number(val));
    const uniqueSuitcaseValues = Array.from(new Set(cleanedSuitcaseValues));


  return (
    <section className={styles.mainContent}>
        <div className={styles.body}>
            <FilterAside allCompanies={allCompanies} allPrices={allPrices} uniqueCategories={uniqueCategories} uniquePassengers={uniquePassengers} uniqueSuitcaseValues={uniqueSuitcaseValues} />
            <ListCars cars={allCars}/>
        </div>
    </section>
  );
}

export default MainContent;