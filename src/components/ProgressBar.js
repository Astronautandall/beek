import React from "react";

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage} />
        </div>
    );
};

const Filler = ({ percentage }) => {
    const color =
        percentage === 100
            ? "linear-gradient(to right, #36dca5 , #36dca5)"
            : "linear-gradient(to right, #53c2f2 , #35d7dc)";
    return (
        <div
            className="progress-bar-filler"
            style={{
                width: `${percentage}%`,
                backgroundImage: color,
            }}
        />
    );
};

export default ProgressBar;
