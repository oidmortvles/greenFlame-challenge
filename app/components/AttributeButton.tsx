import styles from './AttributeButton.module.css';

type AttributeButtonProps = {
    feature:string;
    data?:number | string | boolean;
}

const AttributeButton : React.FC <AttributeButtonProps> = ({feature, data}) =>{

    const featureClass= () =>{
        switch(feature){
            case 'seats':
                return <img src={"/icons/passengers-icon.svg"} alt="Icon" />;

            case 'doors':
                return <img src={"/icons/doors-icon.svg"} alt="Icon" />;

            case 'transmition':
                return <img src={"/icons/transmission-icon.svg"} alt="Icon" />;

            case 'small_suitcase':
                return <img src={"/icons/luggage-icon.svg"} alt="Icon" />;

            case 'large_suitcase':
                return <img src={"/icons/carry-icon.svg"} alt="Icon" />;

            case 'air_conditioner':
                return <img src={"/icons/air-conditioning-icon.svg"} alt="Icon" />;
            
            default:
                return '';
        }
    }

    const dataClass = () =>{
        switch(data){
            case true:
                return "SI";
            case false:
                return "NO";
            case "Automatic":
                return "A";
            default:
                return data;
        }
    }

    return(
        <span className={styles.attributeButton}>
            {featureClass()}
            <p className={styles.data}>{dataClass()}</p> 
        </span>
    )
}

export default AttributeButton