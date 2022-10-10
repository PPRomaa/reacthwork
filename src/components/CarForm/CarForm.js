import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carActions} from "../../redux";
import css from '../Car/car.module.css'

const CarForm = () => {

    const {register, handleSubmit, setValue, reset, formState: {errors, isValid}} = useForm();
    const dispatch = useDispatch();

    const {carforUpdate} = useSelector(state => state.carReducer);

    useEffect(() => {
        if (carforUpdate) {
            setValue('model', carforUpdate.model);
            setValue('price', carforUpdate.price);
            setValue('year', carforUpdate.year);
        }
    }, [carforUpdate, setValue])

    const submit = (data) => {
        if (carforUpdate) {
            dispatch(carActions.updateCar({id:carforUpdate.id,car:data}))
        }else {
            dispatch(carActions.createCar({car:data}))
        }
        reset()

    };

    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                {errors.model && <span>{errors.model.message}</span>}
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                {errors.price && <span>{errors.price.message}</span>}
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>{carforUpdate ? 'Update' : 'Save'}</button>
            </form>
        </div>
    )
}
export {CarForm}