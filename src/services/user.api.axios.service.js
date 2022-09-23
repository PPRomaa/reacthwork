import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json',}
});

const getUsersAxios = () => {
    return axiosInstance.get('/users')
}

const getTodosAxios = () => {
    return axiosInstance.get('/todos')
}

const getAlbumsAxios = () => {
    return axiosInstance.get('/albums')
}

const getCommentsAxios = () => {
    return axiosInstance.get('/comments')
}

const getPostsAxios = (id) => {
    return axiosInstance.get('posts/'+id)
}

export {getUsersAxios, getTodosAxios,getAlbumsAxios,getCommentsAxios,getPostsAxios}