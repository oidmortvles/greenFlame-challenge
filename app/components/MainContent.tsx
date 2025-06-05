import FilterAside from './FiltersAside';
import ListCars from './ListCars';
import styles from './MainContent.module.css';

const MainContent : React.FC = () => {
  return (
    <section className={styles.mainContent}>
        <div className={styles.body}>
            <FilterAside/>
            <ListCars/>
        </div>
    </section>
  );
}

export default MainContent;