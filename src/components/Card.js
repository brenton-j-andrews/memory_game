import React, { useState } from "react";

// Import static images
import ginger from "../assets/images/ginger200.jpg";
import coco from "../assets/images/coco200.jpg";
import bruce from "../assets/images/bruce200.jpg";
import nigel from "../assets/images/nigel200.jpg";
import charlie from "../assets/images/charlie200.jpeg";
import rosa from "../assets/images/rosa200.jpeg";
import moose from "../assets/images/moose200.jpg";
import oreo from "../assets/images/oreo200.jpg";
import winston from "../assets/images/winston200.jpg";
import chip from "../assets/images/chip200.jpg";
import halo from "../assets/images/annie200.jpeg";
import joe from "../assets/images/joe200.jpg";


const Card = (props) => {

    const { clickedKeysArr, setClickedKeysArr, currentScore, setCurrentScore, bestScore, setBestScore } = props;

    // Don't need a set function for the constants below. Not a best practice to leave out?
    const [ cardSequence] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    const [cardNames] = useState([
        "Ginger",
        "Coco",
        "Bruce",
        "Nigel",
        "Charlie",
        "Rosa",
        "Moose",
        "Oreo",
        "Winston",
        "Chip",
        "Halo",
        "Joe"
    ])

    const [cardImages] = useState([
        ginger,
        coco,
        bruce,
        nigel,
        charlie,
        rosa,
        moose,
        oreo,
        winston,
        chip,
        halo,
        joe
    ])

    // Fischer / Yates Shuffle Algorithm. Doesn't use 'useState' to modify the cardSequence but it works fine. Will look later...
    const randomizeCardSequence = () => {
        for ( let i = cardSequence.length - 1; i > 0; i-- ) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardSequence[i], cardSequence[j]] = [cardSequence[j], cardSequence[i]];
        }  
        return cardSequence;
    }

    // Called upon clicking a card.
    const cardClicked = (num) => {
        randomizeCardSequence();

        if (clickedKeysArr.includes(num)) {
            alert(`Whoops, you already clicked on ${cardNames[num]}. Game over.`)
            resetGame();
        }

        else {
            let newScore = currentScore + 1;
            setClickedKeysArr(prevArr => [...prevArr, num]);
            setCurrentScore(newScore);

            if (newScore > bestScore) {
                setBestScore(newScore);
            }

            if (newScore === 12) {
                alert("Congrats, you won the game!");
                resetGame();
            }
        }
    }

    const resetGame = () => {
        setClickedKeysArr(clickedKeysArr => []);
        setCurrentScore(currentScore => 0);
    }
    
    return cardSequence.map((num) => {
        return (
            <div className="card-box" key={cardNames[num]} onClick={() => {cardClicked(num)}}>
                <img className="card-image" src={cardImages[num]} alt="another dog here"></img>
                <p>{cardNames[num]}</p>
            </div>
        )
    })
}

export default Card;