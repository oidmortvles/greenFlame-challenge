import AttributeButton from './AttributeButton';
import styles from './CardCar.module.css';
import PannelDetails from './PannelDetails';

const CardCar:React.FC = () =>{
 return(
    <figure className={styles.cardCar}>
        
        <header className={styles.cardCarHeader}>
            <img src={"./cars/2020-kia-rio-s-sedan-black.png"} width={"200px"}/>
            
            <div className={styles.cardCarContent}>
                <p className={styles.group}>GRUPO B - CAR</p>
                <h3 className={styles.class}>Compacto</h3>
                <p className={styles.brand}>Kia Soul</p>
                <ul className={styles.attributes}>
                    <AttributeButton/>
                    <AttributeButton/>
                    <AttributeButton/>
                    <AttributeButton/>
                    <AttributeButton/>
                    <AttributeButton/>
                </ul>
            </div>            
        </header>


        <section>
            <PannelDetails/>
        </section>

    </figure>
 )
}

export default CardCar;