import React from "react";
import { Grid } from "semantic-ui-react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownloadInfo = ({ isDownloaded }) => {
    return (
        <Grid.Column
            width={8}
            style={{
                color: "#676767",
            }}
        >
            {isDownloaded && (
                <div>
                    <div style={{ fontSize: "0.8em" }}>
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            color="#36dca5"
                            style={{
                                fontSize: "1.5em",
                                paddingTop: 5,
                            }}
                        />{" "}
                        Descargado
                    </div>
                </div>
            )}
        </Grid.Column>
    );
};

export default DownloadInfo;
