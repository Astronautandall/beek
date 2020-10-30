import React from "react";
import { Grid } from "semantic-ui-react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownloadInfo = ({ isDownloaded }) => {
    return (
        <Grid.Column width={8}>
            {isDownloaded && (
                <div className="audiobook-download-text">
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        color="#36dca5"
                        style={{
                            fontSize: "1.8em",
                            paddingTop: 5,
                        }}
                    />{" "}
                    Descargado
                </div>
            )}
        </Grid.Column>
    );
};

export default DownloadInfo;
