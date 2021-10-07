import React, {useState} from 'react';
import './App.css';
import CreatePlaylistCard from "./CreatePlaylistCard";
import PlaylistTable from "./PlaylistTable";
import {PlaylistProvider} from "../context/PlaylistContext"
import netlifyIdentity from "netlify-identity-widget";
import {Button, Card, Input} from "antd";
import {LoginOutlined, LogoutOutlined} from "@ant-design/icons";
import {useNetlifyIdentity} from "../hooks/useNetlifyIdentity";
import {connect, truc} from "./services"

const SOUNDCLOUD_API_URL = "https://api.soundcloud.com";
const redirect = "https://soundcloud-manager.netlify.app"
const connectUrl = SOUNDCLOUD_API_URL + `/connect?client_id=&redirect_uri=${redirect}&response_type=code`

const Main = () => {

    const {isAuthenticated} = useNetlifyIdentity();
    const [value, setValue] = useState("");

    return (
        <>
            <div className="App">
                <div className="entete">
                    {isAuthenticated && <div/>}
                    <div>
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABsElEQVR4AWMYcDAKGKmo9j+5FjASof4/LkuYCBjMiMZm/NrlbPyr1zUNhIFsAwx1mIYQdvHbRlsNVmYmoScff9zVFOO+DhTihyn49///8kP3PqQ5zjj/DeELhE9Y8Bn8uspCVYiTteb///9fmf7/81LjZT3K8PM3ehBE2kpxg8yJQjYYxmbCZvjtLH1hEC3A8C+Y8ecvA4afvxjg+AcmZv71O/RloZEWclDCzGRCDr+XmTpi/4oN9iuwM5QA6fX/vv1kZPj+k4EYLMz4t+x3oX79p1w9S2THwoPoa6q6Meu/P2YM3/4yAwMWaDWjEJSGeBZIQWmsgJmBIRpE8zIw1PxM1whkn3ljE0gHC8wmjp+/Cv/+/38UYuB/oAiQxm4BQcDKwJANpDahRvKnbxADmOAGkWkB2H3vUFIRWOuXb1C/IFsAtpBkC37/Y1iCkUyZ93yO+WPJ5gsygAmWxP4DaYjBf4H0XyiND3z5859hAsfxX9vgsYyN3q/GwAay/PUfhr+iLAzMIFqJnYHt3k+GX4e/MPyb/ApoEeHi4j/WzIXCJwOgZzZGQgUg2ZaMHDAKAMtFwXTSyaEcAAAAAElFTkSuQmCC"
                            width="24" height="24" alt="Icône orange transparente"/>
                        <h1 className="title">Soundcloud Manager</h1>
                    </div>
                    {true &&
                    // <Button type="primary" onClick={() => netlifyIdentity.open()} icon={<LogoutOutlined/>}/>}
                    <>
                        <Button type="primary" href={connectUrl} icon={<LogoutOutlined/>}/>
                        <Button type="primary" onClick={() => truc(value)} icon={<LoginOutlined/>}/>}/>
                        <Input onChange={(evt) => setValue(evt.target.value)}  />
                    </>
                    }
                </div>
                {true ?
                    <PlaylistProvider>
                        <div className="playlist-display">
                            <PlaylistTable/>
                            <CreatePlaylistCard/>
                        </div>
                    </PlaylistProvider>
                    :
                    <Card className="card-connexion">
                        <div className="button-connexion">
                            <h2>Se connecter ?</h2>
                            <Button type="primary" icon={<LoginOutlined/>}
                                    onClick={() => netlifyIdentity.open()}>Connexion</Button>
                        </div>
                    </Card>
                }
            </div>
        </>
    );
}


export default Main;
