"use client"
import styles from './FilterAside.module.css';

import { useFilterCompany } from '../store/filterCompany';
import { useFilterCategory } from '../store/filterCategory';
import { useFilterSuitcase } from '../store/filterSuitcase';
import { useFilterPassenger } from '../store/filterPassenger';
import { useFilterPrice } from '../store/filterPrice';

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

    const {setCompanies, companys, selectCompany, deleteCompany} = useFilterCompany();
    const {setCategories,categories, selectCategory, deleteCategory} = useFilterCategory();
    const {setSuitcases, suitcases, selectSuitcase, deleteSuitcase} = useFilterSuitcase();
    const {setPassenger, passengers, selectPassenger, deletePassenger} = useFilterPassenger();
    const {setPrices} = useFilterPrice();

    useEffect(() => {
        setCompanies(allCompanies);
        setCategories(uniqueCategories);
        setSuitcases(uniqueSuitcaseValues);
        setPassenger(uniquePassengers);
        setPrices(allPrices);
    }, []);

    return(
        <aside className={styles.filterAside}>
            <header className={styles.header}>
                <img src={"./icons/filter-icon.svg"}/>
                <p>Filtrar Resultados</p>
            </header>
            <DropdownFilter title="Compañía rentadora" items={companys} maletas={false} pasajeros={false} add={(item) => selectCompany(item as string)} remove={(item) => deleteCompany(item as string)} />
            <DropdownFilter title="Categoría del auto" items={categories} maletas={false} pasajeros={false} add={(item) =>selectCategory(item as string)} remove={(item) => deleteCategory(item as string)}/>
            <DropdownFilter title="Capacidad de maletas" items={suitcases} maletas={true} pasajeros={false} add={(item) => selectSuitcase(item as number)} remove={(item) => deleteSuitcase(item as number)}/>
            <DropdownFilter title="Cantidad de pasajeros" items={passengers} maletas={false} pasajeros={true} add={(item) => selectPassenger(item as number)} remove={(item) => deletePassenger(item as number)}/>
            
        </aside>
    )
}

export default FilterAside;

