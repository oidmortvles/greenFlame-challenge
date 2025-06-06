"use client";
import styles from './QuoteBtn.module.css';
import { useFilterChoise } from '../store/filterChoiseItem';
import { Car } from '../store/CarsInterface';


type QuoteBtnProps = {
    car: Car;
}

const QuoteBtn : React.FC <QuoteBtnProps> = ({car}) =>{

    const { addCar, selectedCars, removeCar} = useFilterChoise();
    const isSelected = selectedCars.some(selected => selected.code === car.code);

    return(
        <div className={styles.quoteBtn}>

            {
                !isSelected?
                (
                    <button className={styles.cotizarButton} onClick={() => addCar(car)} disabled={selectedCars.length >= 5}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z"/>
                        </svg>
                        Seleccionar este vehículo para cotizar
                    </button>
                )
                :
                (
                    <button className={styles.cotizarButtonAdd} onClick={() => removeCar(car.code)}>
                        <img src={"/icons/check-logo.svg"} />
                        Vehículo agregado a su cotización ({selectedCars.length} de 5`)
                    </button>

                )
                

            }
                

        </div>
    )
}

export default QuoteBtn;