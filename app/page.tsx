import CardCar from "./components/CardCar";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <h1>HOLA</h1>
      <CardCar/>
    </main>
  );
}
