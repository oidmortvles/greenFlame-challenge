"use client";
import CardCar from './CardCar';
import stlyes from './ListCars.module.css';


const ListCars : React.FC = () =>{
    return(
        <section className={stlyes.listCars}>
            <header className={stlyes.listHeader}>
                <p className={stlyes.result}>Encontramos 169 vehículos para tu búsqueda.</p>
                
                <div className={stlyes.check}>
                     <input type="checkbox" value="" id="checkDefault"  defaultChecked className={stlyes.checkBox}/>
                    <label htmlFor="checkDefault">
                        Mostrar descatados primero
                    </label>                    
                </div>

                <div className={stlyes.btn}>
                    <button className={stlyes.sendPrice}>Enviar Cotización</button>
                    <button className={stlyes.topPrice}>
                        Mayor precio
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                </div>
            </header>

            <aside className={stlyes.listCarAside}>
                <CardCar/>
                <CardCar/>
                <CardCar/>

                <CardCar/>
                <CardCar/>
                <CardCar/>

                <CardCar/>
                <CardCar/>
                <CardCar/>
                
            </aside>
        </section>
    )
}

export default ListCars;