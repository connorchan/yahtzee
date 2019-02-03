import React from 'react';

class ScoreCard extends React.Component {
    scoreStatuses = {
        aces: true,
        twos: true,
        threes: true,
        fours: true,
        fives: true,
        threeOfAKind: true,
        fourOfAKind: true,
        fullHouse: true,
        smStraight: true,
        lgStraight: true,
        yahtzee: true,
        chance: true
    };

    scoreUpperSection = (value, numberOfDice) => {
        return value * numberOfDice;
    }

    scoreThreeOfAKind = (diceValues) => {
    }
}