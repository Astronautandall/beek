import React from "react";
import { Grid } from "semantic-ui-react";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TITLE_LENGHT_LIMIT } from "../../../constants";

const Title = ({ title }) => {
    title =
        title.length > TITLE_LENGHT_LIMIT
            ? title.substring(0, TITLE_LENGHT_LIMIT) + "..."
            : title;

    return (
        <Grid.Row columns={2}>
            <Grid.Column width={14}>
                <p className="audiobook-title">{title}</p>
            </Grid.Column>
            <Grid.Column width={2}>
                <FontAwesomeIcon
                    icon={faEllipsisH}
                    style={{ fontSize: "24px", textAlign: "right" }}
                />
            </Grid.Column>
        </Grid.Row>
    );
};

export default Title;
