import {useDispatch} from "react-redux";

import {userActions} from "../../redux";
import css from '../Header/Header.module.css'

const User = ({user}) => {
    const dispatch = useDispatch();

    const {id, name, username, email} = user;

    return (
        <div className={css.user}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>select</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>getFromAPI</button>
            <button onClick={()=> dispatch(userActions.deleteById(id))}>Delete</button>
        </div>
    );
};
export {User}