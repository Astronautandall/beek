// React
import React from "react";

// CSS
import "semantic-ui-css/semantic.min.css";
import "./App.css";

// Data
import audiobooks_data from "./data/audiobooks-data.json";

// Third Party
import { Grid, Container } from "semantic-ui-react";
import Sheet from "react-modal-sheet";

// Local
import AudioBookCard from "./components/AudiobookCard";
import OrderByOptions from "./components/OrderByOptions";
import Navbar from "./components/Navbar";
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

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Navbar onMenuClick={() => setOpen(true)} />
            <Grid style={{ marginTop: 12 }}>
                {renderAudiobooks(audiobooks)}
            </Grid>
            <Sheet
                isOpen={isOpen}
                onClose={closeModal}
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
                            onCancel={closeModal}
                        />
                    </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop onTap={closeModal} />
            </Sheet>
        </Container>
    );
}

export default App;
