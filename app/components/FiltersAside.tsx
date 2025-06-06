"use client"
import styles from './FilterAside.module.css';

import { useFilterCategory } from '../store/filterCategory';
import { useFilterCompany } from '../store/filterCompany';
import { useFilterPassenger } from '../store/filterPassenger';
import { useFilterPrice } from '../store/filterPrice';
import { useFilterSuitcase } from '../store/filterSuitcase';
import DropdownFilter from './DropDownFilter';
import { useEffect } from 'react';

type FilterAsideProps ={
    uniqueCategories:string[],
    allCompanies:string[],
    uniquePassengers:number[],
    allPrices:string[],
    uniqueSuitcaseValues:number[],
}


const FilterAside : React.FC <FilterAsideProps> = ({uniqueCategories, allCompanies, uniquePassengers, allPrices, uniqueSuitcaseValues }) =>{

    const {setCategories,categories} = useFilterCategory();
    const {setCompanies, companys} = useFilterCompany();
    const {setPassenger, passengers} = useFilterPassenger();
    const {setPrices, prices} = useFilterPrice();
    const {setSuitcases, suitcases} = useFilterSuitcase();

    useEffect(() => {
        setCategories(uniqueCategories);
        setCompanies(allCompanies);
        setPassenger(uniquePassengers);
        setPrices(allPrices);
        setSuitcases(uniqueSuitcaseValues);
    }, []);

    return(
        <aside className={styles.filterAside}>
            <header className={styles.header}>
                <img src={"./icons/filter-icon.svg"}/>
                <p>Filtrar Resultados</p>
            </header>
            <DropdownFilter title="Compañía rentadora" items={companys} maletas={false} pasajeros={false} />
            <DropdownFilter title="Categoría del auto" items={categories} maletas={false} pasajeros={false} />
            <DropdownFilter title="Capacidad de maletas" items={suitcases} maletas={true} pasajeros={false}/>
            <DropdownFilter title="Cantidad de pasajeros" items={passengers} maletas={false} pasajeros={true}/>
            
        </aside>
    )
}

export default FilterAside;

