import {useEffect, useState} from "react";
import User from "./User";
import {getUsersAxios} from "../services/user.api.axios.service";


export default function Users() {
    let [users, setUsers] = useState([]);


    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    }, [])

    return (
        <div className={'block'}>
            {users.filter(value => value.launch_year !== '2020').map((user, index) => (
                <User item={user} key={index}/>))}
        </div>
    );

}