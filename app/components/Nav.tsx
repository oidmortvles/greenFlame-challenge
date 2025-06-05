import BookingData from "./BookingData";
import HeaderNav from "./HeaderNav";
import styles from "./Nav.module.css";
import StepsReserve from "./StepsReserve";

const Nav: React.FC = () =>{
    return(
        <nav className={styles.nav}>
            <HeaderNav/>
            <BookingData/>
            <StepsReserve/>
        </nav>
    )
}

export default Nav;