import styles from './BookingTabInfo.module.css';

type BookingTabInfoProps = {
    from:string;
    to:string;
}


const BookingTabInfo: React.FC<BookingTabInfoProps> = ({ from, to }) => {
    return(
        <div className={styles.bookingTabInfo}>
            {from}
            <img src="/icons/chevron-icon.svg" alt="" className={styles.separator}/>
            {to}
        </div>
    )
}

export default BookingTabInfo;