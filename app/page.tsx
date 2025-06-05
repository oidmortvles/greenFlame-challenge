import CardCar from "./components/CardCar";
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <Nav />
      {/* <CardCar/> */}
      <MainContent/>
    </main>
  );
}
