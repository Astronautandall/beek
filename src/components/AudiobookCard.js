// React
import React from "react";

// Third Party
import { Grid } from "semantic-ui-react";
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

    const convertSecondstoHourMinutesSeconds = (seconds) => {
        let remainingSeconds = 0;
        const hours = Math.floor(seconds / 3600);
        remainingSeconds = seconds % 3600;

        const minutes = Math.floor(remainingSeconds / 60);
        remainingSeconds = remainingSeconds % 60;
        return [hours, minutes, remainingSeconds];
    };

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
        const remainingTime = convertSecondstoHourMinutesSeconds(
            remainingSeconds
        );

        return `-${remainingTime[0]}h ${remainingTime[1]}m`;

        // console.log(
        //     `Runtime: ${hours}:${minutes}:${seconds},
        //     Total Secinds: ${totalTimeInSeconds},
        //     Progress: ${audiobook.progress},
        //     Remaining Progress: ${remaingingProgress},
        //     Remaining Seconds: ${remainingSeconds},
        //     Remaining Time: ${remainingTime}`
        // );
    };

    return (
        <Grid.Row columns={2}>
            <Grid.Column width={6}>
                <img
                    src={audiobook.cover_url}
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 10,
                    }}
                />
            </Grid.Column>
            <Grid.Column width={10} style={{ paddingRight: 30 }}>
                <Grid
                    style={{
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
                            fontSize: "0.9em",
                        }}
                    >
                        {audiobook.authors.map((author) => author)}
                    </Grid.Row>
                    <Grid.Row
                        style={{
                            color: "#676767",
                            margin: 0,
                            padding: 0,
                            fontSize: "0.8em",
                        }}
                    >
                        {audiobook.narrators.join(", ")}
                    </Grid.Row>
                    {audiobook.progress > 0 && (
                        <Grid.Row colums={2} style={{ margin: 0, padding: 0 }}>
                            <Grid.Column
                                width={3}
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    fontSize: "0.8em",
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
                            width={8}
                            style={{
                                margin: 0,
                                padding: 0,
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
                                margin: 0,
                                padding: 0,
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
