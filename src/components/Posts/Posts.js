import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";

import css from '../Header/Header.module.css'


const Posts = () => {
    const dispatch = useDispatch();

    const {posts, loading, error, postFromAPI} = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(postActions.getAllPosts())
    }, [])

    return (
        <div>
            {error && <h1>Error</h1>}
            {loading && <h1>Loading...</h1>}
            <hr/>
            <div className={css.posts}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};
export {Posts}