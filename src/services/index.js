import axios from "axios";
import {openNotificationWithIcon} from "../utils";

const MANAGER_API_URL = process.env.SOUNDCLOUD_MANAGER_API_URL;
const SOUNDCLOUD_API_URL = "https://api.soundcloud.com";

export const listPlaylist = async () => {
    const url = MANAGER_API_URL + "/playlists"
    return await axios.get(url)
        .then(response => {
            openNotificationWithIcon('success', 'Playlists à jour.', '');
            return response.data;
        }, error => {
            console.error(error);
            openNotificationWithIcon('error',
                'Erreur chargement playlist',
                'Le chargement de la liste des playlists à planter, faut appuyer sur le bouton de rafraichisement.')
        });
}


export const createPlaylist = async (weekNumber, year) => {
    return axios.post(`${MANAGER_API_URL}/playlists/weekly/${weekNumber}?year=${year}`)
        .then(() => {
            openNotificationWithIcon('success', 'Playlists créées !', '');
        }, error => {
            console.error(error);
            openNotificationWithIcon('error', 'Echec de la création', '');
        });
}

export const getApiCode = async  () => {
    const url = MANAGER_API_URL + "/authorization"

    return axios.get(url)
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.error(error);
            openNotificationWithIcon('error', 'Echec de la récupération du code', '');
        });
}


export const authentication = async (code) => {

    const url = MANAGER_API_URL + `/authentication?code=${code}`

    return axios.get(url)
        .then(() => {
            openNotificationWithIcon('info', 'Api authentifié', '');
        })
        .catch(error => {
            console.error(error);
            openNotificationWithIcon('error', 'Echec de l\'authentification', '');
        })
}
