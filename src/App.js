import React from "react";
import "./App.css";

import "semantic-ui-css/semantic.min.css";
import audiobooks_data from "./data/audiobooks-data.json";

import { Grid, Container } from "semantic-ui-react";
import AudioBookCard from "./components/AudiobookCard";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
    const renderAudiobooks = (audiobooks) => {
        return audiobooks.map((audiobook) => (
            <AudioBookCard audiobook={audiobook} key={audiobook.id} />
        ));
    };

    const audiobooks = audiobooks_data.audiobooks;

    // "id": 261778,
    // 	"title": "10 minutos para atraer abundancia a tu vida",
    // 	"authors": ["María Elena Molina"],
    // 	"narrators": ["María Elena Molina"],
    // 	"runtime": "00:06:27",
    // 	"cover_url": "https://images.findawayworld.com/v1/image/cover/CD261524",
    // 	"isDownloaded": true,
    // 	"progress": 26,
    // 	"lastPlayedDate": "2019-11-20T18:41:17.493Z",
    //   "purchasedDate": "2019-11-19T23:57:12.589Z"

    return (
        <Container>
            <div className="ui fixed menu">
                <div
                    style={{
                        textAlign: "center",

                        width: "100%",
                        fontWeight: "bold",
                        paddingTop: 10,
                        paddingLeft: 20,
                    }}
                >
                    Audiolibros
                </div>
                <div
                    className="right menu"
                    style={{
                        paddingRight: 20,
                        paddingTop: 10,
                        fontSize: 20,
                    }}
                >
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <Grid style={{ marginTop: 10 }}>
                {renderAudiobooks(audiobooks)}
            </Grid>
        </Container>
    );
}

export default App;
