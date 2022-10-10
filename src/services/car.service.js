import {axiosService} from "./axios.service";
import {urls} from "../configs";

const carService = {
    getAll:()=>axiosService.get(urls.cars),
    deleteById:(id)=> axiosService.delete(`${urls.cars}/${id}`),
    updateById:(id, car)=>axiosService.put(`${urls.cars}/${id}`,car),
    create:(car)=>axiosService.post(urls.cars, car)
}

export {
    carService
}