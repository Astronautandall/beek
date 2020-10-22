import React from "react";
import { Container } from "semantic-ui-react";

const OrderByOptions = ({ selected, allOptions, onChange, onCancel }) => {
    const renderOptionInput = () => {
        const inputs = [];

        for (let key in allOptions) {
            const input = (
                <label
                    className="checkbox-container"
                    key={key}
                    style={{ marginBottom: 40 }}
                >
                    {allOptions[key]}
                    <input
                        type="radio"
                        name="orderBy"
                        value={key}
                        checked={allOptions[key] === selected && "checked"}
                        onChange={onChange}
                    />
                    <span className="checkmark"></span>
                </label>
            );
            inputs.push(input);
        }

        return inputs;
    };
    return (
        <React.Fragment>
            <Container>
                <div
                    style={{
                        color: "#676767",
                        marginBottom: 20,
                        marginTop: 20,
                    }}
                >
                    Ordenar por
                </div>
                {renderOptionInput()}
                <button
                    style={{
                        width: "100%",
                        border: "none",
                        height: 50,
                        borderRadius: 30,
                        fontWeight: "bold",
                        backgroundColor: "#6fe2e6",
                        color: "#262525",
                    }}
                    onClick={onCancel}
                >
                    Cancelar
                </button>
            </Container>
        </React.Fragment>
    );
};

export default OrderByOptions;
