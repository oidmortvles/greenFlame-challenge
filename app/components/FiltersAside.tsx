"use client"
import DropdownFilter from './DropDownFilter';
import styles from './FilterAside.module.css';

const FilterAside : React.FC = () =>{

    const items = ['Opción A', 'Opción B', 'Opción C'];

    return(
        <aside className={styles.filterAside}>
            <header className={styles.header}>
                <img src={"./icons/filter-icon.svg"}/>
                <p>Filtrar Resultados</p>
            </header>
            <DropdownFilter title="Compañía rentadora" items={items}/>
            <DropdownFilter title="Categoría del auto" items={items}/>
            <DropdownFilter title="Capacidad de maletas" items={items}/>
            <DropdownFilter title="Cantidad de pasajeros" items={items}/>
            <DropdownFilter title="Fijar un rango de precios (COP)" items={items}/>
        </aside>
    )
}

export default FilterAside;

