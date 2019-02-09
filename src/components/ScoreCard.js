import React from 'react';
import { connect } from 'react-redux';
import { scoreUpperSection, scoreLowerSection } from '../actions';

const ScoreCard = (props) => {
    return (
        <div className="scorecard-wrap">
            <table className="scorecard">
                <tbody>
                    <tr className="header-row">
                        <td>UPPER SECTION</td>
                        <td>HOW TO SCORE</td>
                        <td>SCORE</td>
                    </tr>
                    <tr className="us-row aces">
                        <td>ACES</td>
                        <td>Count and Add <br/> Only Aces</td>
                        <td>{props.scoreCard.aces.completed ? props.scoreCard.aces.score : ''}</td>
                    </tr>
                    <tr className="us-row twos">
                        <td>TWOS</td>
                        <td>Count and Add <br/> Only Twos</td>
                        <td>{props.scoreCard.twos.completed ? props.scoreCard.twos.score : ''}</td>
                    </tr>
                    <tr className="us-row threes">
                        <td>THREES</td>
                        <td>Count and Add <br/> Only Threes</td>
                        <td>{props.scoreCard.threes.completed ? props.scoreCard.threes.score : ''}</td>
                    </tr>
                    <tr className="us-row fours">
                        <td>FOURS</td>
                        <td>Count and Add <br/> Only Fours</td>
                        <td>{props.scoreCard.fours.completed ? props.scoreCard.fours.score : ''}</td>
                    </tr>
                    <tr className="us-row fives">
                        <td>FIVES</td>
                        <td>Count and Add <br/> Only Fives</td>
                        <td>{props.scoreCard.fives.completed ? props.scoreCard.fives.score : ''}</td>
                    </tr>
                    <tr className="us-row sixes">
                        <td>SIXES</td>
                        <td>Count and Add <br/> Only Sixes</td>
                        <td>{props.scoreCard.sixes.completed ? props.scoreCard.sixes.score : ''}</td>
                    </tr>
                    <tr className="us-row upper-total-score">
                        <td>TOTAL SCORE</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="us-row bonus">
                        <td>BONUS</td>
                        <td>35pts if Total Score <br/> >= 63</td>
                        <td></td>
                    </tr>
                    <tr className="us-row upper-total">
                        <td>TOTAL</td>
                        <td>Of Upper Section</td>
                        <td></td>
                    </tr>
                    <tr className="header-row">
                        <td>LOWER SECTION</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="us-row three-of-a-kind">
                        <td>3 OF A KIND</td>
                        <td>Add Total of All Dice</td>
                        <td>{props.scoreCard.threeOfAKind.completed ? props.scoreCard.threeOfAKind.score : ''}</td>
                    </tr>
                    <tr className="us-row four-of-a-kind">
                        <td>4 OF A KIND</td>
                        <td>Add Total of All Dice</td>
                        <td>{props.scoreCard.fourOfAKind.completed ? props.scoreCard.twos.score : ''}</td>
                    </tr>
                    <tr className="us-row full-house">
                        <td>FULL HOUSE</td>
                        <td>Score 25</td>
                        <td>{props.scoreCard.fullHouse.completed ? props.scoreCard.fullHouse.score : ''}</td>
                    </tr>
                    <tr className="us-row sm-straight">
                        <td>SM STRAIGHT</td>
                        <td>Score 30</td>
                        <td>{props.scoreCard.smStraight.completed ? props.scoreCard.smStraight.score : ''}</td>
                    </tr>
                    <tr className="us-row lg-straight">
                        <td>LG STRAIGHT</td>
                        <td>Score 40</td>
                        <td>{props.scoreCard.lgStraight.completed ? props.scoreCard.lgStraight.score : ''}</td>
                    </tr>
                    <tr className="us-row yahtzee">
                        <td>YAHTZEE</td>
                        <td>Score 50</td>
                        <td>{props.scoreCard.yahtzee.completed ? props.scoreCard.yahtzee.score : ''}</td>
                    </tr>
                    <tr className="us-row chance">
                        <td>CHANCE</td>
                        <td>Add Total of All Dice</td>
                        <td>{props.scoreCard.chance.completed ? props.scoreCard.chance.score : ''}</td>
                    </tr>
                    <tr className="us-row upper-total">
                        <td>TOTAL</td>
                        <td>of Upper Section</td>
                        <td></td>
                    </tr>
                    <tr className="us-row lower-total">
                        <td>TOTAL</td>
                        <td>of Lower Section</td>
                        <td></td>
                    </tr>
                    <tr className="us-row grand-total">
                        <td>GRAND TOTAL</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        dice: state.game.dice,
        scoreCard: state.game.scoreCard
    }
}

export default connect(mapStateToProps, { scoreUpperSection, scoreLowerSection } )(ScoreCard);