// React
import React from "react";

// Third Party
import { Grid } from "semantic-ui-react";

// Local
import Progress from "./sections/audiobook_card/Progress";
import Title from "./sections/audiobook_card/Title";
import Authors from "./sections/audiobook_card/Authors";
import Narrators from "./sections/audiobook_card/Narrators";
import DownloadInfo from "./sections/audiobook_card/DownloadInfo";
import RemainingTime from "./sections/audiobook_card/RemainingTime";

const AudioBookCard = ({ audiobook }) => {
    return (
        <Grid.Row columns={2} className="audiobook">
            <Grid.Column width={6}>
                <img
                    className="audiobook-cover-img"
                    src={audiobook.cover_url}
                />
            </Grid.Column>
            <Grid.Column width={10}>
                <Grid>
                    <Title title={audiobook.title} />
                    <Authors authors={audiobook.authors} />
                    <Narrators narrators={audiobook.narrators} />
                    {audiobook.progress > 0 && (
                        <Progress progress={audiobook.progress} />
                    )}
                    <Grid.Row colums={2}>
                        <DownloadInfo isDownloaded={audiobook.isDownloaded} />
                        <RemainingTime
                            progress={audiobook.progress}
                            runtime={audiobook.runtime}
                        />
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    );
};

export default AudioBookCard;
