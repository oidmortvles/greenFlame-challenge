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
                    <button className={stlyes.topPrice}>Mayor precio</button>
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