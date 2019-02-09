import React from 'react';
import Dice from './Dice';
import ScoreCard from './ScoreCard';
import ScoreCardControls from './ScoreCardControls';

const Game = () => {
    return (
        <React.Fragment>
            <Dice />
            <ScoreCard />
            <ScoreCardControls />
        </React.Fragment>
    );
};

export default Game;