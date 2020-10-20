import React from "react";

const ProgressBar = (props) => {
    return (
        <div
            className="progress-bar"
            style={{
                position: "relative",
                height: 4,
                width: "90%",
                borderRadius: 50,
                background: "#edf1f3",
            }}
        >
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
            className="filler"
            style={{
                width: `${percentage}%`,
                backgroundImage: color,
                height: "100%",
                borderRadius: "inherit",
                position: "absolute",
            }}
        />
    );
};

export default ProgressBar;
