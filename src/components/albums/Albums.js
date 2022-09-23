import {useEffect, useState} from "react";

import {getAlbumsAxios} from "../../services/user.api.axios.service";
import Album from "../album/Album";

const Albums = () => {
    const [albums,setAlbums] = useState([]);

    useEffect(()=>{
        getAlbumsAxios().then(({data})=>setAlbums(data))
    },[])

    return(
        <div>
            {albums.map(album => (<Album key={album.id} album={album}/>))}
        </div>
    )

}
export {
    Albums
}