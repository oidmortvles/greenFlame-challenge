import styles from './CardCar.module.css';

const CardCar:React.FC = () =>{
 return(
    <figure className={styles.cardCar}>
        <header>
            <img src={"./cars/2020-kia-rio-s-sedan-black.png"} width={"200px"}/>
            <div>
                <p>GRUPO B - CAR</p>
                <h3>Compacto</h3>
                <p>Kia Soul</p>
                <ul>
                    
                </ul>
            </div>
        </header>
    </figure>
 )
}

export default CardCar;