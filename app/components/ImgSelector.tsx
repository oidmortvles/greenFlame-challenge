import styles from './ImgSelector.module.css';

type ImgSelectorProps = {
   brand: number; 
   img:string;
   stars: number;
   featured: boolean; 
}

const ImgSelector: React.FC <ImgSelectorProps> = ({brand, img, stars, featured}) => {

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

    const carPicture = img.split('/').pop();

    const totalStars = 5;
    const solidStars = stars;
    const emptyStars = totalStars - solidStars;


    return(
        <section className={styles.imgSelector}>                
                <aside>
                    <img src={image()} />
                    <div className={styles.starRating}>
                        {[...Array(solidStars)].map((_, i) => (
                            <img src={"/icons/star-solid-icon.svg"} key={i} />
                        ))}
                        {[...Array(emptyStars)].map((_, i) => (
                            <img src={"/icons/star-outlined-icon.svg"} key={i}/>
                        ))}
                    </div>
                </aside>

                <div className={styles.imgContainer}>
                    <img src={`/cars/${carPicture}`} width={"201px"} height={"auto"}/>
                </div>
                
                <div className={styles.btnFeatured}>
                    {featured &&
                        <button className={styles.featuredButton}>
                            <img src={"/icons/featured-icon.svg"} />
                            Destacado
                        </button>
                    }
                </div>
                
        </section>
    )
}

export default ImgSelector;