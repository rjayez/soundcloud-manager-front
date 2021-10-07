import axios from "axios";
import {openNotificationWithIcon} from "../../utils";


const url = process.env.SOUNDCLOUD_MANAGER_API_URL;
const SOUNDCLOUD_API_URL = "https://api.soundcloud.com";

export const listPlaylist = async () => {
    return await axios.get(`${url}/playlists`)
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
    return axios.post(`${url}/playlists/weekly/${weekNumber}?year=${year}`)
        .then(() => {
            openNotificationWithIcon('success', 'Playlists créées !', '');
        }, error => {
            console.error(error);
            openNotificationWithIcon('error', 'Echec de la création', '');
        });
}

export const connect = () => {
    const connectUrl = SOUNDCLOUD_API_URL + "/connect?client_id=&redirect_uri=localhost&response_type=code"

    return axios.get(connectUrl)
        .then(res => {
            console.log(res)
        });
}

export const truc = (code) => {
    const trucUrl = `https://api.soundcloud.com/oauth2/token?grant_type=authorization_code&client_id=&client_secret=&redirect_uri=https://soundcloud-manager.netlify.app&code=${code}`
    const header = {
        "accept": "application/json; charset=utf-8",
        "Content-Type": "pplication/x-www-form-urlencoded"
    }
    return axios.post(trucUrl, {}, {headers: header})
}