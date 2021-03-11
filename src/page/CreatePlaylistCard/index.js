import React, {useState} from "react";
import {getWeekNumber} from "../utils/DateUtils";
import {createPlaylist} from "../services";
import {Button, Card, InputNumber} from "antd";
import {PlusCircleTwoTone} from "@ant-design/icons";

const CreatePlaylistCard = () => {
    // const [load, setLoad] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedNumberWeek, setSelectedNumberWeek] = useState(getWeekNumber(new Date()));
    const [selectedYear, setSelectedYear] = useState(new Date().getUTCFullYear());

    const onClickCreate = () => {
        setLoading(true);
        createPlaylist(selectedNumberWeek, selectedYear)
            .finally(() => setLoading(false));
    };

    return (
        <Card className="playlist-creator">
            <div style={{display: "grid", alignItems : "center"}}>
                    <span style={{gridRow: "1", gridColumn: "1", justifySelf : "left", }}>Numéro de semaine :</span>
                    <InputNumber style={{margin: "5px", gridRow: "1", gridColumn: "2", justifySelf : "right", width: "60px", textAlign: "center"}} min={0} max={53} defaultValue={getWeekNumber(new Date())}
                                 onChange={value => setSelectedNumberWeek(value)}/>
                    <span style={{gridRow: "2", gridColumn: "1", justifySelf : "left"}}>Année :</span>
                    <InputNumber style={{margin: "5px", gridRow: "2", gridColumn: "2", justifySelf : "right", width: "60px"}} cen min={2010} max={2099} defaultValue={selectedYear}
                                 onChange={value => setSelectedYear(value)}/>
            </div>
                <Button style={{justifyContent: "center", marginTop : "15px"}} type="default" icon={<PlusCircleTwoTone/>} loading={loading} onClick={onClickCreate}>
                    Créer Playlists
                </Button>

        </Card>
    );
}

export default CreatePlaylistCard;