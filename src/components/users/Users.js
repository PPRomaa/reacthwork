import {useEffect, useState} from "react";
import User from "./User";
import {getUsersAxios} from "../services/user.api.axios.service";


export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);


    const lift = (obj) => {
        setUser(obj)
    };

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    }, [])

    return (
        <div className={'block'}>
            <div>
            <h3> {user?.username} <br/> {user?.name} </h3>
            </div>
            {users.map((user, index) => (<User item={user} key={index} lift={lift}/>))}
        </div>
    );

}