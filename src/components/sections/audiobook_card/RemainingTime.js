import React from "react";
import { Grid } from "semantic-ui-react";
import { convertSecondsToHourMinutesSeconds } from "../../../utils";

const RemainingTime = ({ runtime, progress }) => {
    const renderRemaingTime = () => {
        const [hours, minutes, seconds] = runtime.split(":");
        if (progress === 0) return `${hours}h ${minutes}m`;
        if (progress === 100) return "Terminado";

        const totalTimeInSeconds =
            parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

        const remaingingProgress = (100 - progress) / 100;
        const remainingSeconds = Math.floor(
            totalTimeInSeconds * remaingingProgress
        );
        const remainingTime = convertSecondsToHourMinutesSeconds(
            remainingSeconds
        );

        return `-${remainingTime[0]}h ${remainingTime[1]}m`;
    };

    return (
        <Grid.Column width={8}>
            <p className="audiobook-remaining-time">{renderRemaingTime()}</p>
        </Grid.Column>
    );
};

export default RemainingTime;
