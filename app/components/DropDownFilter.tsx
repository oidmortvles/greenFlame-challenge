"use client"
import { useState } from 'react';
import styles from './DropDownFilter.module.css';
import CustomCheckBox from './CustomCheckBox';

interface DropdownProps {
  title: string;
  items: string[] | number[];
  maletas?:boolean;
  pasajeros?:boolean;
    add: (item: string | number) => void;
    remove: (item: string | number) => void;
}

const DropdownFilter: React.FC<DropdownProps> = ({ title, items, maletas, pasajeros, add, remove }) => {
    
        const [active,setActive] = useState (false);
        
        const selectSelector = () =>{
            setActive(!active)
        }


    return(
            <div className={`${styles.selector} ${active ? styles.expand : ""}`}>
                <header className={`${styles.header} ${active ? styles.selectHeader : ""}`} onClick={selectSelector}>
                    <h3>{title}</h3>
                    <button className={styles.dropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16" className={`${active ? styles.svgActive : ''}`}>
                            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                        </svg>
                    </button>
                </header>
                
                <ul className={styles.list}>
                    {
                        items.map((item, index) => (
                            <CustomCheckBox label={item} key={index} onCheck={() => add(item)} onUncheck={() => remove(item)}  maletas={maletas} pasajeros={pasajeros} />
                        ))  
                    }
                </ul>
            </div>
        )
    };

export default DropdownFilter;
