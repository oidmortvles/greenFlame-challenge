import AttributeButton from './AttributeButton';
import styles from './CardCar.module.css';
import ImgSelector from './ImgSelector';
import PannelDetails from './PannelDetails';

const CardCar:React.FC = () =>{
 return(
    <figure className={styles.cardCar}>
        
        <header className={styles.cardCarHeader}>
            <ImgSelector brand={3}/>            
            <div className={styles.cardCarContent}>
                <p className={styles.group}>GRUPO B - CAR</p>
                <h3 className={styles.class}>Compacto</h3>
                <p className={styles.brand}>Kia Soul</p>
                <ul className={styles.attributes}>
                    <AttributeButton feature='seats' data={""}/>
                    <AttributeButton feature='doors' data={""}/>
                    <AttributeButton feature='transmition' data={""}/>
                    <AttributeButton feature='small_suitcase' data={""}/>
                    <AttributeButton feature='large_suitcase' data={""}/>
                    <AttributeButton feature='air_conditioner' data={""}/>                    
                </ul>
                
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z"/>
                    </svg>
                    Seleccionar este vehículo para cotizar
                </button>
                
            </div>            
        </header>


        <section>
            <PannelDetails/>
        </section>

    </figure>
 )
}

export default CardCar;