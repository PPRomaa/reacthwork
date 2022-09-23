import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {getPostsAxios} from "../../services/user.api.axios.service";
import Post from "../post/Post";

const Posts = () => {
    const {id} = useParams();

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        getPostsAxios(id).then(({data}) => setPosts([{...data}]))
    },[id])

    return(
        <div>
            {posts.map(post => (<Post key={post.id} post={post}/>))}
        </div>
    );
}
export {
    Posts
}