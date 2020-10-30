// React
import React from "react";

// Third Party
import { Grid } from "semantic-ui-react";

// Local
import ProgressBar from "../../ProgressBar";

const Progress = ({ progress }) => {
    return (
        <Grid.Row colums={2} className="audiobook-progress-container">
            <Grid.Column width={3}>
                <p className="audiobook-read-percentage">{progress}%</p>
            </Grid.Column>
            <Grid.Column width={13} className="progress-bar-container">
                <ProgressBar percentage={progress} />
            </Grid.Column>
        </Grid.Row>
    );
};

export default Progress;
