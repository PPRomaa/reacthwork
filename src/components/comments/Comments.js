import {useEffect, useState} from "react";

import {getCommentsAxios} from "../../services/user.api.axios.service";
import Comment from "../comment/Comment";

const Comments = () => {
    const [comments,setComments] = useState([]);

    useEffect(()=>{
        getCommentsAxios().then(({data})=> setComments(data))
    },[])
    return(
        <div>
            {comments.map(comments => (<Comment key={comments.id} comments={comments}/>))}
        </div>
    )

}
export {
    Comments
}