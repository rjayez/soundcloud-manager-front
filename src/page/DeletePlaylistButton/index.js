import React, {useContext, useState} from "react";
import {Button, Popconfirm,} from "antd";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import {PlaylistContext} from "../../context/PlaylistContext";

const DeletePlaylistButton = ({playlistId}) => {

    const [playlist, setPlaylist] = useContext(PlaylistContext);

    const onDeleteConfirm = () => {
        let playlistName = playlistId.replace(/ /g, "-")
        removePlaylist();
        window.open(`https://soundcloud.com/hiprom-rom/sets/${playlistName}#suppression-de-la-playlist`)
    }

    const removePlaylist = () => {
        setPlaylist(playlist.filter(p => p.titre !== playlistId));
    }

    return (
        <Popconfirm title="Supprimer cette playlist ?" onConfirm={() => onDeleteConfirm()}>
            <Button type="danger" className="button-delete">
                <DeleteOutlined/>
            </Button>
        </Popconfirm>
    );
}

export default DeletePlaylistButton;
