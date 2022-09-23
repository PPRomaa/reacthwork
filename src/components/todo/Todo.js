export default function Todo ({todos}){
    return(
        <div>
            <p>{todos.userId} - {todos.title}</p>
        </div>
    );
}