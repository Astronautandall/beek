import React from "react";
import { Grid } from "semantic-ui-react";

const Authors = ({ authors }) => {
    return (
        <Grid.Row>
            <p className="audiobook-authors">{authors.join(", ")}</p>
        </Grid.Row>
    );
};

export default Authors;
