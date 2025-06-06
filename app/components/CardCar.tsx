
import AttributeButton from './AttributeButton';
import styles from './CardCar.module.css';
import ImgSelector from './ImgSelector';
import PannelDetails from './PannelDetails';


import { Car } from '../store/CarsInterface';
import QuoteBtn from './QuoteBtn';
type CardCarProps = {
    car: Car;
}

const CardCar:React.FC<CardCarProps> = ({car}) =>{



 return(
    <figure className={styles.cardCar}>        
        <header className={styles.cardCarHeader}>
            <ImgSelector brand={car.brand} img={car.picture_url.normal ? car.picture_url.normal : "https://test/assets/fleet_images/2020-kia-rio-s-sedan-white.png"} stars={car.stars} featured={car.vehicle_type === "1"} />            
            
            <div className={styles.cardCarContent}>
                <p className={styles.group}>GRUPO {car.vehicle_group} - {car.code}</p>
                <h3 className={styles.class}>{car.features.category}</h3>
                <p className={styles.brand}>{car.name_details}</p>
                
                <ul className={styles.attributes}>
                    <AttributeButton feature='seats' data={car.features.seats}/>
                    <AttributeButton feature='doors' data={car.features.doors}/>
                    <AttributeButton feature='transmition' data={car.features.transmition}/>
                    <AttributeButton feature='small_suitcase' data={car.features.small_suitcase}/>
                    <AttributeButton feature='large_suitcase' data={car.features.large_suitcase}/>
                    <AttributeButton feature='air_conditioner' data={car.features.air_conditioner}/>                    
                </ul>
                
                <QuoteBtn car={car}/>
                
            </div>            
        </header>


        <section>
            <PannelDetails car={car}/>
        </section>

    </figure>
 )
}

export default CardCar;