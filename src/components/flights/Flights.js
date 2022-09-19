import {useEffect, useState} from "react";
import Flight from "./Flight";
import {getUsersAxios} from "../services/user.api.axios.service";


export default function Flights() {
    let [users, setUsers] = useState([]);


    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    }, [])

    return (
        <div className={'block'}>
            {users.filter(value => value.launch_year !== '2020').map((user, index) => (
                <Flight item={user} key={index}/>))}
        </div>
    );

}