import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const ScoreCardSection = styled.section`
    background: #EEE;
    padding: 15px 0;

    &.sticky {
        padding-top: 220px;
    }
`;

const TableData = styled.td`
    padding: 4px;
    border: 1px solid #000;
    background: #FFF;

    .header-row & {
        font-weight: bold;
    }

    :nth-child(2) {
        font-size: 12px;
    }

    :nth-child(2), :nth-child(3), .header-row & {
        text-align: center;
    }
`;

const ScoreCard = (props) => {
    return (
        <ScoreCardSection className="scorecard-section">
            <table className="scorecard" align="center" cellPadding="0">
                <tbody>
                    <tr className="header-row">
                        <TableData>UPPER SECTION</TableData>
                        <TableData>HOW TO SCORE</TableData>
                        <TableData>SCORE</TableData>
                    </tr>
                    <tr className="us-row aces">
                        <TableData>ACES</TableData>
                        <TableData>Count and Add <br/> Only Aces</TableData>
                        <TableData>{props.scoreCard.aces.completed || props.ended ? props.scoreCard.aces.score : ''}</TableData>
                    </tr>
                    <tr className="us-row twos">
                        <TableData>TWOS</TableData>
                        <TableData>Count and Add <br/> Only Twos</TableData>
                        <TableData>{props.scoreCard.twos.completed || props.ended ? props.scoreCard.twos.score : ''}</TableData>
                    </tr>
                    <tr className="us-row threes">
                        <TableData>THREES</TableData>
                        <TableData>Count and Add <br/> Only Threes</TableData>
                        <TableData>{props.scoreCard.threes.completed || props.ended ? props.scoreCard.threes.score : ''}</TableData>
                    </tr>
                    <tr className="us-row fours">
                        <TableData>FOURS</TableData>
                        <TableData>Count and Add <br/> Only Fours</TableData>
                        <TableData>{props.scoreCard.fours.completed || props.ended ? props.scoreCard.fours.score : ''}</TableData>
                    </tr>
                    <tr className="us-row fives">
                        <TableData>FIVES</TableData>
                        <TableData>Count and Add <br/> Only Fives</TableData>
                        <TableData>{props.scoreCard.fives.completed || props.ended ? props.scoreCard.fives.score : ''}</TableData>
                    </tr>
                    <tr className="us-row sixes">
                        <TableData>SIXES</TableData>
                        <TableData>Count and Add <br/> Only Sixes</TableData>
                        <TableData>{props.scoreCard.sixes.completed || props.ended ? props.scoreCard.sixes.score : ''}</TableData>
                    </tr>
                    <tr className="us-row upper-total-score">
                        <TableData>TOTAL SCORE</TableData>
                        <TableData></TableData>
                        <TableData>{props.scoreCard.upperScore.completed || props.ended ? props.scoreCard.upperScore.score : ''}</TableData>
                    </tr>
                    <tr className="us-row bonus">
                        <TableData>BONUS</TableData>
                        <TableData>35pts if Total Score <br/> >= 63</TableData>
                        <TableData>{props.scoreCard.upperBonus.completed || props.ended ? props.scoreCard.upperBonus.score : ''}</TableData>
                    </tr>
                    <tr className="us-row upper-total">
                        <TableData>TOTAL</TableData>
                        <TableData>of Upper Section</TableData>
                        <TableData>{props.scoreCard.upperTotal.completed || props.ended ? props.scoreCard.upperTotal.score : ''}</TableData>
                    </tr>
                    <tr className="header-row">
                        <TableData>LOWER SECTION</TableData>
                        <TableData></TableData>
                        <TableData></TableData>
                    </tr>
                    <tr className="ls-row three-of-a-kind">
                        <TableData>3 OF A KIND</TableData>
                        <TableData>Add Total of All Dice</TableData>
                        <TableData>{props.scoreCard.threeOfAKind.completed || props.ended ? props.scoreCard.threeOfAKind.score : ''}</TableData>
                    </tr>
                    <tr className="ls-row four-of-a-kind">
                        <TableData>4 OF A KIND</TableData>
                        <TableData>Add Total of All Dice</TableData>
                        <TableData>{props.scoreCard.fourOfAKind.completed || props.ended ? props.scoreCard.fourOfAKind.score : ''}</TableData>
                    </tr>
                    <tr className="ls-row full-house">
                        <TableData>FULL HOUSE</TableData>
                        <TableData>Score 25</TableData>
                        <TableData>{props.scoreCard.fullHouse.completed || props.ended ? props.scoreCard.fullHouse.score : ''}</TableData>
                    </tr>
                    <tr className="ls-row sm-straight">
                        <TableData>SM STRAIGHT</TableData>
                        <TableData>Score 30</TableData>
                        <TableData>{props.scoreCard.smStraight.completed || props.ended ? props.scoreCard.smStraight.score : ''}</TableData>
                    </tr>
                    <tr className="ls-row lg-straight">
                        <TableData>LG STRAIGHT</TableData>
                        <TableData>Score 40</TableData>
                        <TableData>{props.scoreCard.lgStraight.completed || props.ended ? props.scoreCard.lgStraight.score : ''}</TableData>
                    </tr>
                    <tr className="ls-row yahtzee">
                        <TableData>YAHTZEE</TableData>
                        <TableData>Score 50</TableData>
                        <TableData>{props.scoreCard.yahtzee.completed || props.ended ? props.scoreCard.yahtzee.score : ''}</TableData>
                    </tr>
                    <tr className="ls-row chance">
                        <TableData>CHANCE</TableData>
                        <TableData>Add Total of All Dice</TableData>
                        <TableData>{props.scoreCard.chance.completed || props.ended ? props.scoreCard.chance.score : ''}</TableData>
                    </tr>
                    <tr className="header-row">
                        <TableData>FINAL</TableData>
                        <TableData></TableData>
                        <TableData></TableData>
                    </tr>
                    <tr className="ls-row upper-total">
                        <TableData>TOTAL</TableData>
                        <TableData>of Upper Section</TableData>
                        <TableData>{props.scoreCard.upperTotal.completed || props.ended ? props.scoreCard.upperTotal.score : ''}</TableData>
                    </tr>
                    <tr className="ls-row lower-total">
                        <TableData>TOTAL</TableData>
                        <TableData>of Lower Section</TableData>
                        <TableData>{props.scoreCard.lowerScore.completed || props.ended ? props.scoreCard.lowerScore.score : ''}</TableData>
                    </tr>
                    <tr className="ls-row grand-total">
                        <TableData>GRAND TOTAL</TableData>
                        <TableData></TableData>
                        <TableData>{props.scoreCard.grandTotal.completed || props.ended ? props.scoreCard.grandTotal.score : ''}</TableData>
                    </tr>
                </tbody>
            </table>
        </ScoreCardSection>
    );
}

const mapStateToProps = (state) => {
    return {
        dice: state.game.dice,
        scoreCard: state.score.scoreCard,
        ended: state.game.ended
    }
}

export default connect(mapStateToProps, null)(ScoreCard);