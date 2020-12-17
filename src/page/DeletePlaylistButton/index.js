import React, {useState} from "react";
import {Button, Popconfirm,} from "antd";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";

const DeletePlaylistButton = ({playlistName}) => {

    const onDeleteConfirm = () => {
        window.open(`https://soundcloud.com/hiprom-rom/sets/${playlistName}#suppression--de-la-playlist`)
    }

    return (
        <Popconfirm title="Supprimer cette playlist ?" onConfirm={() => onDeleteConfirm()}>

            <Button type="danger" className="button-delete"  >
                <DeleteOutlined />
            </Button>
        </Popconfirm>
    );
}

export default DeletePlaylistButton;