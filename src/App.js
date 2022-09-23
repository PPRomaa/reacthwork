import {
    Link,
    Routes,
    Route
} from "react-router-dom";

import './App.css';
import Home from "./components/home/Home";
import {Users} from "./components/users/Users";
import {Todos} from "./components/todos/Todos";
import {Albums} from "./components/albums/Albums";
import {Comments} from "./components/comments/Comments";
import {Posts} from "./components/posts/Posts";

function App() {
    return (

        <div>
            <ul>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/users'}>All users</Link></li>
                <li><Link to={'/todos'}>Todos</Link></li>
                <li><Link to={'/albums'}>Albums</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
            </ul>
            <hr/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
                <Route path={'/comments/:id'} element={<Posts/>}/>
            </Routes>
        </div>
    );
}

export default App;
