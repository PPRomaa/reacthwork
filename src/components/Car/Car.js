import {useDispatch} from "react-redux";

import {carActions} from "../../redux";
import css from './car.module.css'

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();
    return (
        <div>
            <div className={css.car}>
                <div>id:{id}</div>
                <div>model:{model}</div>
                <div>price:{price}</div>
                <div>year:{year}</div>
                <button onClick={()=>dispatch(carActions.carUp(car))}>update</button>
                <button onClick={()=>dispatch(carActions.deleteCar({id}))}>delete</button>
            </div>
        </div>
    )
}
export {Car}