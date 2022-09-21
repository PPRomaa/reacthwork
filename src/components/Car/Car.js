import css from './Car.module.css'
import {carService} from "../../services";


const Car = ({car, setCars, carSetUpdate}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setCars(cars => {
            const index = cars.findIndex(value => value.id === id);
            cars.splice(index, 1)
            return [...cars]
        })
    };

    const updateCar = () => {
        carSetUpdate(car)
        console.log(car)
    }

    return (
        <div className={css.Car}>
            <div>
                <div> id: {id}</div>
                <div> model: {model}</div>
                <div> price: {price}</div>
                <div> year: {year}</div>
            </div>
            <div className={css.tools}>
                <button onClick={() => updateCar()}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>
        </div>
    );
};

export {Car};