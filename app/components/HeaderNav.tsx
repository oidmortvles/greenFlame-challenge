import styles from './HeaderNav.module.css';

const HeaderNav: React.FC = () =>{
    return(
        <header className={styles.header}>
                <img src={"/icons/logo-udr.svg"}  alt="Inicio"/>
                <ul className={styles.topList}>
                    <li><a href="#">Buscar Transacción</a></li>
                    <li><a href="#">Políticas</a></li>
                    <li><a href="#">Contactenos</a></li>
                    <div className={styles.buttons}>
                        <button className={styles.languageBtn}>
                            <img src={"/icons/spa-flag.svg"} alt="Traducir" />
                            <span>
                                Español 
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </span>
                        </button>

                        <button className={styles.profileBtn}>
                            <span>
                                Hola, Javier
                                <div className={styles.avatar}>
                                    J
                                </div>
                            </span>
                        </button>
                    </div>
                </ul>
            </header>
    )
}

export default HeaderNav;