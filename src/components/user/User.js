export default function User({user}) {

    return (
        <div>
            <h3>{user.id} - {user.name} </h3>
            <p>Email:{user.email}</p>
        </div>);
}