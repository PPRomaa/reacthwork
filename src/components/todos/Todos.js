import {useEffect, useState} from "react";
import {getTodosAxios} from "../../services/user.api.axios.service";
import Todo from "../todo/Todo";

const Todos = () => {
    const [todos,setTodos] = useState([]);

    useEffect(() => {
        getTodosAxios().then(({data}) => setTodos(data))
    })

    return(
        <div>
            {todos.map(todos => (<Todo key={todos.id} todos={todos}/>))}
        </div>
    )
}

export {
    Todos
}