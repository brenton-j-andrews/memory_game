import React from "react";

const Scoreboard = (props) => {
    const { current_score, best_score } = props; 

    return (
        <div className="scoreboard-wrapper">
            <h3> Click on the dogs to gain points, but remember which ones you have clicked on or its back to zero! </h3>
            <div className="scoreboard">
                <h5> Current Score: { current_score }</h5>
                <h5> Best Score: {best_score } </h5>
            </div>
        </div>
    )
}

export default Scoreboard;