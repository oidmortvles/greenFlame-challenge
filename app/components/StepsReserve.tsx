import styles from './StepsReserve.module.css';

const StepsReserve: React.FC = () =>{
    return(
        <section className={styles.stepsReserve}>        
            <div className={styles.stepsReserveBody}>
                <p>Selecciona tu vehículo</p>
                <img src="/icons/chevron-icon.svg" alt="" className={styles.separator}/>
                <p>Agrega equipamiento adicional</p>
                <img src="/icons/chevron-icon.svg" alt="" className={styles.separator}/>
                <p>Información del conductor</p>
                <img src="/icons/chevron-icon.svg" alt="" className={styles.separator}/>
                <p>Confirmación de la reserva</p>
            </div>
        </section>
    )
}

export default StepsReserve;