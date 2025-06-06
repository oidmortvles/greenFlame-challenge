"use client";
import { useState } from 'react';
import styles from './PannelDetails.module.css';
import Tooltip from './Tooltip';


const PannelDetails: React.FC = () => {

    const [tooltip, setTooltip] = useState(false);

    const handleTooltip = () => {
        setTooltip(!tooltip);   
    }

    return(
        <>
        {tooltip && <Tooltip tittle={"Inclusive Light"}/>}
        <section className={styles.pannelDetails}>
            <header className={styles.headerPannel}>
                <div className={styles.details}>
                    <h3>Inclusive Light</h3>
                    <img src={"/icons/info-icon.svg"} onClick={handleTooltip}/>
                </div>
                <p className={styles.clarification}>Precio por 3 días de renta</p>
            </header>

            <hr className={styles.separator} />

            <div className={styles.price}>
                <h2><span>COP</span> 1,895.60</h2>
                <p className={styles.usd}>(USD 1,229.72)</p>
            </div>

            <button className={styles.buttonAction}>Seleccionar</button>
        </section>
        </>
    )
}

export default PannelDetails;