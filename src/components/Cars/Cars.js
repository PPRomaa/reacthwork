import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";

import css from '../Car/car.module.css'


const Cars = () => {

    const {cars} = useSelector(state => state.carReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[dispatch])

    return(
        <div className={css.cars}>
            {cars.map(car => <Car key={car.id} car={car}/>)}

        </div>
    )
}
export {Cars}