// React
import React from "react";

// Third Party
import { Grid } from "semantic-ui-react";

// Local
import ProgressBar from "../../ProgressBar";

const Progress = ({ progress }) => {
    return (
        <Grid.Row colums={2}>
            <Grid.Column
                width={3}
                style={{
                    fontSize: "0.8em",
                }}
            >
                {progress}%
            </Grid.Column>
            <Grid.Column
                width={13}
                style={{
                    paddingTop: 8,
                }}
            >
                <ProgressBar percentage={progress} />
            </Grid.Column>
        </Grid.Row>
    );
};

export default Progress;
