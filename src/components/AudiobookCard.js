// React
import React from "react";

// Third Party
import { Grid } from "semantic-ui-react";
import { faCheckCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Local
import { TITLE_LENGHT_LIMIT } from "../constants";
import { convertSecondsToHourMinutesSeconds } from "../utils";
import ProgressBar from "./ProgressBar";

const AudioBookCard = ({ audiobook }) => {
    const title =
        audiobook.title.length > TITLE_LENGHT_LIMIT
            ? audiobook.title.substring(0, TITLE_LENGHT_LIMIT) + "..."
            : audiobook.title;

    const renderRemaingTime = (runtime, progress) => {
        const [hours, minutes, seconds] = runtime.split(":");
        if (progress === 0) return `${hours}h ${minutes}m`;
        if (progress === 100) return "Terminado";

        const totalTimeInSeconds =
            parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

        const remaingingProgress = (100 - audiobook.progress) / 100;
        const remainingSeconds = Math.floor(
            totalTimeInSeconds * remaingingProgress
        );
        const remainingTime = convertSecondsToHourMinutesSeconds(
            remainingSeconds
        );

        return `-${remainingTime[0]}h ${remainingTime[1]}m`;
    };

    return (
        <Grid.Row columns={2} className="audiobook">
            <Grid.Column width={6}>
                <img
                    className="audiobook-cover-img"
                    src={audiobook.cover_url}
                />
            </Grid.Column>
            <Grid.Column width={10}>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column width={14}>
                            <strong>{title}</strong>
                        </Grid.Column>
                        <Grid.Column
                            width={2}
                            style={{
                                textAlign: "right",
                            }}
                        >
                            <FontAwesomeIcon icon={faEllipsisH} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row
                        style={{
                            fontSize: "0.9em",
                        }}
                    >
                        <strong>{audiobook.authors.join(", ")}</strong>
                    </Grid.Row>
                    <Grid.Row
                        style={{
                            color: "#676767",
                            fontSize: "0.8em",
                        }}
                    >
                        {audiobook.narrators.join(", ")}
                    </Grid.Row>
                    {audiobook.progress > 0 && (
                        <Grid.Row colums={2}>
                            <Grid.Column
                                width={3}
                                style={{
                                    fontSize: "0.8em",
                                }}
                            >
                                {audiobook.progress}%
                            </Grid.Column>
                            <Grid.Column
                                width={13}
                                style={{
                                    paddingTop: 8,
                                }}
                            >
                                <ProgressBar percentage={audiobook.progress} />
                            </Grid.Column>
                        </Grid.Row>
                    )}

                    <Grid.Row colums={2}>
                        <Grid.Column
                            width={8}
                            style={{
                                color: "#676767",
                            }}
                        >
                            {audiobook.isDownloaded && (
                                <div>
                                    <div style={{ fontSize: "0.8em" }}>
                                        <FontAwesomeIcon
                                            icon={faCheckCircle}
                                            color="#36dca5"
                                            style={{
                                                fontSize: "1.5em",
                                                paddingTop: 5,
                                            }}
                                        />{" "}
                                        Descargado
                                    </div>
                                </div>
                            )}
                        </Grid.Column>
                        <Grid.Column
                            width={8}
                            style={{
                                color: "#676767",
                                fontSize: "0.8em",
                                textAlign: "right",
                            }}
                        >
                            {renderRemaingTime(
                                audiobook.runtime,
                                audiobook.progress
                            )}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    );
};

export default AudioBookCard;
