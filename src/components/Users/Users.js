import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

// import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";
import css from '../Header/Header.module.css'

const Users = () => {
    const dispatch = useDispatch();

    const {users, loading, error, userFromAPI} = useSelector(state => state.userReducer);
    const {postFromAPI} = useSelector(state => state.postReducer);

    useEffect(() => {
        // userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {error && <h1>Error</h1>}
            {loading && <h1>Loading...</h1>}
            {userFromAPI && <div className={css.api}>{userFromAPI.email}</div>}
            {postFromAPI && <div className={css.api}>{postFromAPI.title}</div>}
            <div className={css.users}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};
export {Users}