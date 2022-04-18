import React, {useEffect, useState} from "react";

const Card = (props) => {

    const { clickedKeysArr, setClickedKeysArr, currentScore, setCurrentScore, bestScore, setBestScore } = props;
    const [ cardSequence, setCardSequence] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    const [cardNames, setCardNames] = useState([
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
        "Annie",
        "Dog"
    ])


    // Fischer / Yates Shuffle Algorithm.
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
            console.log("You clicked this card already!!!");
            setClickedKeysArr(clickedKeysArr => []);
            setCurrentScore(currentScore => 0);
        }

        else {
            console.log("This card hasn't been clicked!")
            setClickedKeysArr(prevArr => [...prevArr, num]);
            setCurrentScore(currentScore + 1);
        }
    }
    
    return cardSequence.map((num) => {
        return (
            <div className="card" key={cardNames[num]} onClick={() => {cardClicked(num)}}>
                {cardNames[num]}
            </div>
        )
    })
}

export default Card;