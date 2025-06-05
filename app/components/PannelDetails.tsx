"use client";
import styles from './PannelDetails.module.css';


const PannelDetails: React.FC = () => {
    return(
        <section className={styles.pannelDetails}>
            <header className={styles.headerPannel}>
                <div className={styles.details}>
                    <h3>Inclusive Light</h3>
                    <p>•</p>
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
    )
}

export default PannelDetails;