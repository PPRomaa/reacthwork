export default function Flight({item}) {

    return (<div className={'rocketBlock'}>
        <h2 className={'fmName'}> Mission name - {item.mission_name}</h2>
        <img src={item.links.mission_patch_small} alt=''></img>
        <h3 className={'rlName'}> Rocket name - {item.rocket.rocket_name} <br/> Launch year - {item.launch_year}</h3>

    </div>);
}