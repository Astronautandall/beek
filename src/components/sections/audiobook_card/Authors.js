import React from "react";
import { Grid } from "semantic-ui-react";

const Authors = ({ authors }) => {
    return (
        <Grid.Row
            style={{
                fontSize: "0.9em",
            }}
        >
            <strong>{authors.join(", ")}</strong>
        </Grid.Row>
    );
};

export default Authors;
