import React from "react";
import { Grid } from "semantic-ui-react";

const Narrators = ({ narrators }) => {
    return (
        <Grid.Row>
            <p className="audiobook-narrators">{narrators.join(", ")}</p>
        </Grid.Row>
    );
};

export default Narrators;
