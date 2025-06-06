import styles from './ImgSelector.module.css';

type ImgSelectorProps = {
   brand: number; 
}

const ImgSelector: React.FC <ImgSelectorProps> = ({brand}) => {

    const image = () =>{
        switch(brand){
            case 1:
                return "/icons/avis-logo.svg";
            case 2:
                return "/icons/budget-logo.svg";
            case 3:
                return "/icons/payless-logo.svg";
            default:
                return "/icons/avis-logo.svg";
        }
    }

    return(
        <section className={styles.imgSelector}>                
                <aside>
                    <img src={image()} />
                    <div className={styles.starRating}>
                        <img src={"/icons/star-outlined-icon.svg"} />
                        <img src={"/icons/star-outlined-icon.svg"} />
                        <img src={"/icons/star-outlined-icon.svg"} />
                        <img src={"/icons/star-outlined-icon.svg"} />
                        <img src={"/icons/star-outlined-icon.svg"} />
                    </div>
                </aside>
                
                <img src={"./cars/2020-kia-rio-s-sedan-black.png"} width={"201px"} height={"auto"}/>
                
                <button>
                    <img src={"/icons/featured-icon.svg"} />
                    Destacado
                </button>
        </section>
    )
}

export default ImgSelector;