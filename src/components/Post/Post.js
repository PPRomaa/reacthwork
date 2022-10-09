import {useDispatch} from "react-redux";

import {postActions} from "../../redux";
import css from '../Header/Header.module.css'

const Post = ({post}) => {
    const dispatch = useDispatch();

    const {id,title,body} = post;
    return (
        <div className={css.post}>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={() => dispatch(postActions.setCurrentPost(post))}>select</button>
            <button onClick={() => dispatch(postActions.getByIdPost({id}))}>getFromAPI</button>
            <button onClick={()=> dispatch(postActions.deleteByIdPost(id))}>Delete</button>
        </div>
    );
};
export {Post}