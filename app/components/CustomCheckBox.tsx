"use client"
import { useState } from 'react';
import styles from './CustomCheckBox.module.css';

type CustomCheckBoxProps = {
    label:string | number;
    onCheck?: () => void;
    onUncheck?: () => void;
    maletas?:boolean;
    pasajeros?:boolean;
}

const CustomCheckBox : React.FC <CustomCheckBoxProps> = ({ label, onCheck, onUncheck, maletas, pasajeros }) =>{
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        if (newChecked) {
        onCheck && onCheck();
        } else {
        onUncheck && onUncheck();
        }
    };

    return(
        <label className={styles.customCheckbox}>
            <input type="checkbox" checked={checked} onChange={handleChange} className={styles.input}/>
            {label} 
            {maletas && " ó más maletas"}
            {pasajeros && " pasajeros"}
        </label>
    )
}


export default CustomCheckBox;