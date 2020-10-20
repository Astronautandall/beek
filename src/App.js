import React from "react";
import "./App.css";

import "semantic-ui-css/semantic.min.css";
import audiobooks_data from "./data/audiobooks-data.json";

import { Grid, Container } from "semantic-ui-react";
import AudioBookCard from "./components/AudiobookCard";

function App() {
    const renderAudiobooks = (audiobooks) => {
        return audiobooks.map((audiobook) => (
            <AudioBookCard audiobook={audiobook} />
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
            <Grid>{renderAudiobooks(audiobooks)}</Grid>
        </Container>
    );
}

export default App;
