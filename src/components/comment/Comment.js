import {Link} from "react-router-dom";

export default function Comment({comments}){
    return(
        <div>
            <Link to={comments.postId.toString()}>{comments.name}</Link>
            <p>{comments.body} <br/> {comments.email}</p>
        </div>
    );
}