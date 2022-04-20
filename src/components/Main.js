import React, {useState} from 'react';

import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';

const Main = () => {
    const [clickedKeysArr, setClickedKeysArr] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <div className="main-wrapper">
            <Scoreboard current_score = { currentScore } best_score = { bestScore } />
            <Gameboard 
            clickedKeysArr = {clickedKeysArr}
            setClickedKeysArr = {setClickedKeysArr}
            currentScore = {currentScore}
            setCurrentScore = {setCurrentScore}
            bestScore = {bestScore}
            setBestScore = {setBestScore}
            />
        </div>
    )
}

export default Main;