import React from 'react';
import Dice from './Dice';
import ScoreCard from './ScoreCard';

const Game = () => {
    return (
        <React.Fragment>
            <Dice />
            <ScoreCard />
        </React.Fragment>
    );
};

export default Game;