import React from 'react';
import Dice from './Dice';
import ScoreCard from './ScoreCard';
import ScoreCardControls from './ScoreCardControls';

class Game extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        if (window.scrollY > 45) {
            document.querySelector('.dice-wrap').classList.add("sticky");
        } else {
            document.querySelector('.dice-wrap').classList.remove("sticky");
        }
    }

    render() {
        return (
            <React.Fragment>
                <Dice />
                <ScoreCard />
                <ScoreCardControls />
            </React.Fragment>
        );
    }
};

export default Game;