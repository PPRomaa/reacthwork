import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: "https://api.spacexdata.com/v3/launches/",
    headers: {'Content-Type': 'application/Json',}
});

const getUsersAxios = () => {
    return axiosInstance.get()
}
const getUserAxios = (id) => {
    return axiosInstance.get('/' + id)
}

export {getUsersAxios, getUserAxios}