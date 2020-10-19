import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "semantic-ui-css/semantic.min.css";
import audiobooks_data from "./data/audiobooks-data.json";

import { Grid, Image } from "semantic-ui-react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
    const renderAudiobooks = (audiobooks) => {};

    const audiobooks = audiobooks_data.audiobooks;
    const audiobook = audiobooks[0];

    const progress = () => {
        document.querySelector("#example1").progress();
    };

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

    const ProgressBar = (props) => {
        return (
            <div
                className="progress-bar"
                style={{
                    position: "relative",
                    height: 5,
                    width: "100%",
                    borderRadius: 10,
                    background: "#edf1f3",
                }}
            >
                <Filler percentage={props.percentage} />
            </div>
        );
    };

    const Filler = (props) => {
        return (
            <div
                className="filler"
                style={{
                    width: `${props.percentage}%`,
                    backgroundImage:
                        "linear-gradient(to right, #53c2f2 , #35d7dc)",
                    height: "100%",
                    borderRadius: "inherit",
                    position: "absolute",
                }}
            />
        );
    };

    const title = audiobook.title.substring(0, 25) + "...";

    return (
        <Grid style={{ marginLeft: 10, marginRight: 10, marginTop: 20 }}>
            <Grid.Row columns={2}>
                <Grid.Column width={6}>
                    <img
                        src={audiobook.cover_url}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 10,
                            border: "1px solid #dfdede",
                        }}
                    />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Grid>
                        <Grid.Row
                            style={{
                                fontWeight: "bold",

                                margin: 0,
                                padding: 0,
                                paddingTop: 10,
                            }}
                        >
                            {title}
                        </Grid.Row>
                        <Grid.Row
                            style={{
                                fontWeight: "bold",
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            {audiobook.authors.map((author) => author)}
                        </Grid.Row>
                        <Grid.Row
                            style={{ color: "#676767", margin: 0, padding: 0 }}
                        >
                            {audiobook.narrators.map((narrator) => narrator)}
                        </Grid.Row>
                        <Grid.Row colums={2} style={{ margin: 0, padding: 0 }}>
                            <Grid.Column
                                width={3}
                                style={{
                                    margin: 0,
                                    padding: 0,
                                }}
                            >
                                {audiobook.progress}%
                            </Grid.Column>
                            <Grid.Column
                                width={13}
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    paddingTop: 8,
                                }}
                            >
                                <ProgressBar percentage={audiobook.progress} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row colums={2} style={{ margin: 0, padding: 0 }}>
                            <Grid.Column
                                width={3}
                                style={{
                                    margin: 0,
                                    padding: 0,
                                }}
                            >
                                {audiobook.isDownloaded && (
                                    <div>
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                        Descargado
                                    </div>
                                )}
                            </Grid.Column>
                            <Grid.Column
                                width={13}
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    paddingTop: 8,
                                    textAlign: "right",
                                }}
                            >
                                -10
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default App;
