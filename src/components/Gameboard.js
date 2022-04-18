import React from "react";

import Card from "./Card";

const Gameboard = (props) => {
    return (
        <div className="gameboard-grid">
            <Card {...props}/>
        </div>
    )
}

export default Gameboard;