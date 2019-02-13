import React from 'react';
import Dice from './Dice';
import ScoreCard from './ScoreCard';
import ScoreCardControls from './ScoreCardControls';
import { Prompt } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { endGame, resetGame } from '../actions';

const EndMessageWrap = styled.div`
    background: #EEE;
    text-align: center;
    font-size: 18px;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const Message= styled.p`
    padding: 0 0 10px 0;

    :nth-child(1) {
        margin: 0 !important;
    }
`;

class Game extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentDidUpdate() {
        if (!this.props.ended) {
            let sections = ['aces', 'twos', 'threes', 'fours', 'fives', 'sixes',
            'threeOfAKind', 'fourOfAKind', 'fullHouse', 'smStraight', 'lgStraight', 'yahtzee', 'chance'];
            let completed = sections.filter((section) => {
                return this.props.scoreCard[section].completed;
            }).length;

            if (completed === sections.length) {
                this.props.endGame();
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.props.resetGame();
    }

    handleScroll() {
        if (window.scrollY > 40) {
            document.querySelector('.dice-wrap').classList.add("sticky");
            document.querySelector('.scorecard-section').classList.add("sticky");
        } else {
            document.querySelector('.dice-wrap').classList.remove("sticky");
            document.querySelector('.scorecard-section').classList.remove("sticky");
        }
    }

    renderFinalScoreMessage() {
        let message = this.props.scoreCard.grandTotal.score >= 235 ? 'Congratulations!' : 'You\'ll get \'em next time.';
        if (this.props.ended) {
            return (
                <EndMessageWrap>
                    <Message>Your final score is: <Bold>{this.props.scoreCard.grandTotal.score} points.</Bold></Message>
                    <Message>{message}</Message>
                </EndMessageWrap>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                <Prompt when={this.props.active && !this.props.ended} message="Are you sure you want to leave? You will lose your current game progress." />
                <Dice />
                <ScoreCard />
                {this.renderFinalScoreMessage()}
                <ScoreCardControls />
            </React.Fragment>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        active: state.game.active,
        scoreCard: state.score.scoreCard,
        ended: state.game.ended
    }
}

export default connect(mapStateToProps, { endGame, resetGame })(Game);