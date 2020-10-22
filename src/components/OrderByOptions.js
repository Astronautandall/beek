import React from "react";

const OrderByOptions = ({ selected, allOptions, onChange }) => {
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
            <div>Ordenar por</div>
            <h1>Custom Radio Buttons</h1>
            {renderOptionInput()}
        </React.Fragment>
    );
};

export default OrderByOptions;
