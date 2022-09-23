import {useEffect, useState} from "react";

import User from "../user/User";
import {getUsersAxios} from "../../services/user.api.axios.service";


const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsersAxios().then(({data}) => setUsers(data))
    },[])


    return (
        <div>
            {users.map(user => (<User key={user.id} user={user}/>))}

        </div>
    );
}
export {
    Users
}