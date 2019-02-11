import React from 'react';
import Dice from './Dice';
import ScoreCard from './ScoreCard';
import ScoreCardControls from './ScoreCardControls';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
`;

class Game extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        if (window.scrollY > 40) {
            document.querySelector('.dice-wrap').classList.add("sticky");
        } else {
            document.querySelector('.dice-wrap').classList.remove("sticky");
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
        scoreCard: state.score.scoreCard,
        ended: state.game.ended
    }
}

export default connect(mapStateToProps, null)(Game);