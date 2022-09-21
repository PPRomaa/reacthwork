import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi'
import {useEffect} from "react";

import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setCars, carUpdate, carSetUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    });

    useEffect(() => {
        if (carUpdate) {
            setValue('model', carUpdate.model);
            setValue('price', carUpdate.price);
            setValue('year', carUpdate.year);
        }
    },[carUpdate])

    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(cars => [...cars, data])
        reset()
    };


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};