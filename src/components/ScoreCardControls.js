import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { scoreUpperSection, scoreLowerSection, endGame, resetTurn } from '../actions';

const ScoreCardControlsSection = styled.section`
    background: #EEE;
    text-align: center;
    padding-bottom: 15px;
`;

const ScoreCardControls = (props) => {
    return (
        <ScoreCardControlsSection>
            <div className="scorecard-top-buttons-wrap">
                <button 
                    onClick={() => {
                        props.scoreUpperSection(props.dice, 1, 'aces');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.aces.completed || props.numRolls === 0 || props.ended || !props.active}>Aces</button>
                <button
                    onClick={() => {
                        props.scoreUpperSection(props.dice, 2, 'twos');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.twos.completed || props.numRolls === 0 || props.ended || !props.active}>Twos</button>
                <button
                    onClick={() => {
                        props.scoreUpperSection(props.dice, 3, 'threes');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.threes.completed || props.numRolls === 0 || props.ended || !props.active}>Threes</button>
                <button
                    onClick={() => {
                        props.scoreUpperSection(props.dice, 4, 'fours');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.fours.completed || props.numRolls === 0 || props.ended || !props.active}>Fours</button>
                <button
                    onClick={() => {
                        props.scoreUpperSection(props.dice, 5, 'fives');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.fives.completed || props.numRolls === 0 || props.ended || !props.active}>Fives</button>
                <button
                    onClick={() => {
                        props.scoreUpperSection(props.dice, 6, 'sixes');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.sixes.completed || props.numRolls === 0 || props.ended || !props.active}>Sixes</button>
            </div>
            <div className="scorecard-bottom-buttons-wrap">
                <button
                    onClick={() => {
                        props.scoreLowerSection(props.dice, 'threeOfAKind');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.threeOfAKind.completed || props.numRolls === 0 || props.ended || !props.active}>Three of a Kind</button>
                <button
                    onClick={() => {
                        props.scoreLowerSection(props.dice, 'fourOfAKind');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.fourOfAKind.completed || props.numRolls === 0 || props.ended || !props.active}>Four of a Kind</button>
                <button
                    onClick={() => {
                        props.scoreLowerSection(props.dice, 'fullHouse');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.fullHouse.completed || props.numRolls === 0 || props.ended || !props.active}>Full House</button>
                <button
                    onClick={() => {
                        props.scoreLowerSection(props.dice, 'smStraight');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.smStraight.completed || props.numRolls === 0 || props.ended || !props.active}>Small Straight</button>
                <button
                    onClick={() => {
                        props.scoreLowerSection(props.dice, 'lgStraight');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.lgStraight.completed || props.numRolls === 0 || props.ended || !props.active}>Large Straight</button>
                <button
                    onClick={() => {
                        props.scoreLowerSection(props.dice, 'yahtzee');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.yahtzee.completed || props.numRolls === 0 || props.ended || !props.active}>Yahtzee</button>
                <button
                    onClick={() => {
                        props.scoreLowerSection(props.dice, 'chance');
                        props.resetTurn(props.dice);
                    }}
                    disabled={props.scoreCard.chance.completed || props.numRolls === 0 || props.ended || !props.active}>Chance</button>
                <button
                    onClick={() => {props.endGame()}}
                    disabled={props.ended}>End Game</button>
            </div>
        </ScoreCardControlsSection>
    );
};

const mapStateToProps = (state) => {
    return {
        dice: state.game.dice,
        scoreCard: state.score.scoreCard,
        numRolls: state.game.numRolls,
        active: state.game.active,
        ended: state.game.ended
    }
}

export default connect(mapStateToProps, { scoreLowerSection, scoreUpperSection, endGame, resetTurn })(ScoreCardControls);