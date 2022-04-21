import React from "react";

import dog_icon from "../assets/images/bulldog.png";

const Scoreboard = (props) => {
    const { current_score, best_score } = props; 

    return (
        <div className="scoreboard-wrapper">
            <h3> Click on the dogs to gain points, but remember which ones you have clicked on or its back to zero! </h3>
            <img className="scoreboard-icon" src={dog_icon} alt=""></img>
            <div className="scoreboard">
                <h3> Current Score: { current_score }</h3>
                <h3> Best Score: {best_score } </h3>
            </div>
        </div>
    )
}

export default Scoreboard;
