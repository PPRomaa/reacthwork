import {useState} from "react";
import User from "../User/User";

export default function Users(){
    let [users,setUsers] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setUsers(value.results);
        })

    return (
        <div className={'block'}>
            {users.map((user,index) => (<User item={user} key={index}/>))}
        </div>
    );

}