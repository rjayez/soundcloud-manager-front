import React from "react";
import DeletePlaylistButton from "../DeletePlaylistButton";

export const tableColums = [
    {
        title: 'Nom Playlist',
        dataIndex: 'titre',
        key: 'titre',
        sorter: (a, b) => a.titre.localeCompare(b.titre),
        filters: [{text: 'Track semaine', value: 'Track semaine'}, {text: 'Set semaine', value: 'Set semaine'}],
        onFilter: (value, record) => record.titre.includes(value)
    },
    {
        title: 'Nombre de piste',
        dataIndex: 'nb',
        key: 'nb',
        width: 150,
        sorter: (a, b) => a.nb - b.nb
    },
    {
        dataIndex: 'key',
        width: 75,
        align: 'center',
        render: (text, record) => <DeletePlaylistButton playlistId={record.titre}/>
    }
];

