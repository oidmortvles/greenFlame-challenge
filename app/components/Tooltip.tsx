"use client"
import styles from './Tooltip.module.css';


import { Car } from '../store/CarsInterface';
type ItemTooltipProps = {
    text:string;
}

const ItemTooltip : React.FC <ItemTooltipProps> = ({text}) =>{
    return(
        <li className={styles.itemTooltip}>
            <header>
                <img src="/icons/check-logo.svg" />
                <p className={styles.text}>{text}</p>
            </header>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
        </li>
    )
}


const getData = (car: Car) => {
  const entries = Object.entries(car.rates);
  if (entries.length === 0) return [];

  const [_, rate] = entries[0];
  const meta = rate.inclusions_meta;

  return Object.entries(meta).map(([key, val]) => ({
    key,...val,
  }));
};


type TooltipProps = {
    tittle:string;
    car: Car;
}

const Tooltip : React.FC <TooltipProps> = ({tittle, car}) =>{

    const data = getData(car).slice(0, 6);


    return(
        <div className={styles.tooltip}>
            <h3>Detalle de la tarifa</h3>
            <div className={styles.tooltipContent}>
                <p className={styles.tittle}>{tittle}</p>
                <ul className={styles.list}>
                    {data.map((item) => (
                        <ItemTooltip key={item.key} text={item.name} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Tooltip;