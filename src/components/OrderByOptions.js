import React from "react";
import { Container } from "semantic-ui-react";

const OrderByOptions = ({ selected, allOptions, onChange, onCancel }) => {
    const renderOptionInput = () => {
        const inputs = [];

        for (let key in allOptions) {
            const input = (
                <label className="checkbox-container" key={key}>
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
                <div className="modal-title">Ordenar por</div>
                {renderOptionInput()}
                <button className="modal-cancel-btn" onClick={onCancel}>
                    Cancelar
                </button>
            </Container>
        </React.Fragment>
    );
};

export default OrderByOptions;
