// React
import React from "react";

// CSS
import "./App.css";
import "semantic-ui-css/semantic.min.css";

// Data
import audiobooks_data from "./data/audiobooks-data.json";

// Third Party
import { Grid, Container } from "semantic-ui-react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sheet from "react-modal-sheet";

// Local
import AudioBookCard from "./components/AudiobookCard";
import OrderByOptions from "./components/OrderByOptions";
import { getOrderFunc } from "./utils";
import { orderOptionsEnum } from "./constants";

function App() {
    const defaultOrder = orderOptionsEnum.TITLE;
    const [selectedFilter, setSelectedFilter] = React.useState(defaultOrder);
    const [audiobooks, setAudiobooks] = React.useState([]);
    const [isOpen, setOpen] = React.useState(false);

    React.useEffect(() => {
        console.log("Aloha");
        setAudiobooks(
            audiobooks_data.audiobooks.sort(getOrderFunc(defaultOrder))
        );
    }, [defaultOrder]);

    const onOrderChange = (event) => {
        setSelectedFilter(orderOptionsEnum[event.target.value]);
        const orderFunction = getOrderFunc(
            orderOptionsEnum[event.target.value]
        );
        setAudiobooks(audiobooks.sort(orderFunction));
    };

    const renderAudiobooks = (audiobooks) => {
        return audiobooks.map((audiobook) => (
            <AudioBookCard audiobook={audiobook} key={audiobook.id} />
        ));
    };

    return (
        <Container>
            <div className="ui fixed menu">
                <div
                    style={{
                        textAlign: "center",

                        width: "100%",
                        fontWeight: "bold",
                        paddingTop: 10,
                        paddingLeft: 20,
                    }}
                >
                    Audiolibros
                </div>
                <div
                    className="right menu"
                    style={{
                        paddingRight: 20,
                        paddingTop: 10,
                        fontSize: 20,
                    }}
                >
                    <a href="#" onClick={() => setOpen(true)}>
                        <FontAwesomeIcon icon={faBars} color="black" />
                    </a>
                </div>
            </div>

            <Grid style={{ marginTop: 10 }}>
                {renderAudiobooks(audiobooks)}
            </Grid>

            <Sheet
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                snapPoints={[400]}
                initialSnap={0}
            >
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <OrderByOptions
                            selected={selectedFilter}
                            allOptions={orderOptionsEnum}
                            onChange={onOrderChange}
                            onCancel={() => setOpen(false)}
                        />
                    </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop />
            </Sheet>
        </Container>
    );
}

export default App;
