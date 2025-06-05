import styles from './AttributeButton.module.css';

const AttributeButton : React.FC = () =>{

    return(
        <span className={styles.attributeButton}>
            <p className={styles.data}>5</p> 
        </span>
    )
}

export default AttributeButton