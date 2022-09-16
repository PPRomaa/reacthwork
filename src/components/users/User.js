export default function User(props) {
    let {item: user, lift} = props;

    return (<div>
        <h2> ID - {user.id} Name - {user.name}</h2>
        <button onClick={() => {
            lift(user)
        }}>info
        </button>
    </div>);
}