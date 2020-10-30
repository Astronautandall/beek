import React from "react";
import { Grid } from "semantic-ui-react";

const Authors = ({ authors }) => {
    return (
        <Grid.Row className="audiobook-authors-container">
            <p className="audiobook-authors">{authors.join(", ")}</p>
        </Grid.Row>
    );
};

export default Authors;
