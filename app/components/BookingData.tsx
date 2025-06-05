import styles from './BookingData.module.css';
import BookingTabInfo from './BookingTabInfo';

const BookingData : React.FC = () =>{
    return(
            <section className={styles.bookingData}>
                <BookingTabInfo from='Miami Internation Aiport (MIA)' to='Orlando International Aiport (MCO)'  />
                 <BookingTabInfo from='20 septiembre 2025, 12:00' to='30 septiembre 2025, 18:00'/>
                
                <button className={styles.bookingEdit}>
                    Modificar
                </button>
            </section>
    )
}

export default BookingData;