import React from "react";
import { Grid } from "semantic-ui-react";

const Narrators = ({ narrators }) => {
    return (
        <Grid.Row
            style={{
                color: "#676767",
                fontSize: "0.8em",
            }}
        >
            {narrators.join(", ")}
        </Grid.Row>
    );
};

export default Narrators;
