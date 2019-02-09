import React from 'react';
import { connect } from 'react-redux';
import { scoreUpperSection, scoreLowerSection } from '../actions';

const ScoreCardControls = (props) => {
    return (
        <div className="scorecard-controls-wrap">
            <div className="scorecard-top-buttons-wrap">
                <button 
                    onClick={() => {props.scoreUpperSection(props.dice, 1, 'aces')}}
                    disabled={props.scoreCard.aces.completed || props.numRolls === 0}>Aces</button>
                <button
                    onClick={() => {props.scoreUpperSection(props.dice, 2, 'twos')}}
                    disabled={props.scoreCard.twos.completed || props.numRolls === 0}>Twos</button>
                <button
                    onClick={() => {props.scoreUpperSection(props.dice, 3, 'threes')}}
                    disabled={props.scoreCard.threes.completed || props.numRolls === 0}>Threes</button>
                <button
                    onClick={() => {props.scoreUpperSection(props.dice, 4, 'fours')}}
                    disabled={props.scoreCard.fours.completed || props.numRolls === 0}>Fours</button>
                <button
                    onClick={() => {props.scoreUpperSection(props.dice, 5, 'fives')}}
                    disabled={props.scoreCard.fives.completed || props.numRolls === 0}>Fives</button>
                <button
                    onClick={() => {props.scoreUpperSection(props.dice, 6, 'sixes')}}
                    disabled={props.scoreCard.sixes.completed || props.numRolls === 0}>Sixes</button>
            </div>
            <div className="scorecard-bottom-buttons-wrap">
                <button
                    onClick={() => {props.scoreLowerSection(props.dice, 'threeOfAKind')}}
                    disabled={props.scoreCard.threeOfAKind.completed || props.numRolls === 0}>Three of a Kind</button>
                <button
                    onClick={() => {props.scoreLowerSection(props.dice, 'fourOfAKind')}}
                    disabled={props.scoreCard.fourOfAKind.completed || props.numRolls === 0}>Four of a Kind</button>
                <button
                    onClick={() => {props.scoreLowerSection(props.dice, 'fullHouse')}}
                    disabled={props.scoreCard.fullHouse.completed || props.numRolls === 0}>Full House</button>
                <button
                    onClick={() => {props.scoreLowerSection(props.dice, 'smStraight')}}
                    disabled={props.scoreCard.smStraight.completed || props.numRolls === 0}>Small Straight</button>
                <button
                    onClick={() => {props.scoreLowerSection(props.dice, 'lgStraight')}}
                    disabled={props.scoreCard.lgStraight.completed || props.numRolls === 0}>Large Straight</button>
                <button
                    onClick={() => {props.scoreLowerSection(props.dice, 'yahtzee')}}
                    disabled={props.scoreCard.yahtzee.completed || props.numRolls === 0}>Yahtzee</button>
                <button
                    onClick={() => {props.scoreLowerSection(props.dice, 'chance')}}
                    disabled={props.scoreCard.chance.completed || props.numRolls === 0}>Chance</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        dice: state.game.dice,
        scoreCard: state.game.scoreCard,
        numRolls: state.game.numRolls
    }
}

export default connect(mapStateToProps, { scoreLowerSection, scoreUpperSection })(ScoreCardControls);