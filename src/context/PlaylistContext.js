import React, {useState} from "react";

const PlaylistContext = React.createContext([{}, value => {
}]);

const PlaylistProvider = (props) => {
    const [playlist, setPlaylist] = useState([]);
    return <PlaylistContext.Provider value={[playlist, setPlaylist]}>
        {props.children}
    </PlaylistContext.Provider>
}

export {PlaylistContext, PlaylistProvider};
