// React
import React from "react";

// Third Party
import { Grid, Container } from "semantic-ui-react";
import { faCheckCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Local
import ProgressBar from "./ProgressBar";

const AudioBookCard = ({ audiobook }) => {
    const TITLE_LENGHT_LIMIT = 25;
    const title =
        audiobook.title.length > TITLE_LENGHT_LIMIT
            ? audiobook.title.substring(0, TITLE_LENGHT_LIMIT) + "..."
            : audiobook.title;

    return (
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
                <Grid
                    style={{
                        border: "1px solid yellow",
                        marginTop: 0,
                        padding: 0,
                    }}
                >
                    <Grid.Row columns={2} style={{ padding: 0 }}>
                        <Grid.Column
                            style={{
                                fontWeight: "bold",
                                padding: 0,
                                margin: 0,
                            }}
                            width={14}
                        >
                            {title}
                        </Grid.Column>
                        <Grid.Column
                            width={2}
                            style={{
                                padding: 0,
                                margin: 0,
                                textAlign: "center",
                            }}
                        >
                            <FontAwesomeIcon icon={faEllipsisH} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row
                        style={{
                            fontWeight: "bold",
                            margin: 0,
                            padding: 0,
                            border: "1px solid red",
                        }}
                    >
                        {audiobook.authors.map((author) => author)}
                    </Grid.Row>
                    <Grid.Row
                        style={{ color: "#676767", margin: 0, padding: 0 }}
                    >
                        {audiobook.narrators.map((narrator) => narrator)}
                    </Grid.Row>
                    {audiobook.progress > 0 && (
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
                    )}

                    <Grid.Row colums={2} style={{ margin: 0, padding: 0 }}>
                        <Grid.Column
                            width={12}
                            style={{
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            {audiobook.isDownloaded && (
                                <div>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        color="#36dca5"
                                    />{" "}
                                    Descargado
                                </div>
                            )}
                        </Grid.Column>
                        <Grid.Column
                            width={4}
                            style={{
                                margin: 0,
                                padding: 0,

                                textAlign: "right",
                            }}
                        >
                            -10
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    );
};

export default AudioBookCard;
