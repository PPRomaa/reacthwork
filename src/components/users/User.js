export default function User(props) {
    let {item: user} = props;

    return (<div className={'rocketBlock'}>
        <h2 className={'fmName'}> Mission name - {user.mission_name}</h2>
        <img src={user.links.mission_patch_small} alt=''></img>
        <h3 className={'rlName'}> Rocket name - {user.rocket.rocket_name} <br/> Launch year - {user.launch_year}</h3>

    </div>);
}