export default function User(props){
    let {item:user} = props;

    return (<div>
        <h2> ID - {user.id} Name - {user.name}</h2>
        <h3> Status - {user.status} <br/> Species - {user.species} <br/> Gender - {user.gender}</h3>
        <img src={user.image} alt={''}></img>
    </div>);
}