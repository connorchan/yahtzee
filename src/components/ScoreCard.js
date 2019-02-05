import React from 'react';
import { connect } from 'react-redux';

import { scoreUpperSection } from '../actions';

class ScoreCard extends React.Component {
    render() {
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
                            <td></td>
                        </tr>
                        <tr className="us-row twos">
                            <td>TWOS</td>
                            <td>Count and Add <br/> Only Twos</td>
                            <td></td>
                        </tr>
                        <tr className="us-row threes">
                            <td>THREES</td>
                            <td>Count and Add <br/> Only Threes</td>
                            <td></td>
                        </tr>
                        <tr className="us-row fours">
                            <td>FOURS</td>
                            <td>Count and Add <br/> Only Fours</td>
                            <td></td>
                        </tr>
                        <tr className="us-row fives">
                            <td>FIVES</td>
                            <td>Count and Add <br/> Only Fives</td>
                            <td></td>
                        </tr>
                        <tr className="us-row sixes">
                            <td>SIXES</td>
                            <td>Count and Add <br/> Only Sixes</td>
                            <td></td>
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
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dice: state.game.dice,
        scoreCard: state.game.scoreCard
    }
}

export default connect(mapStateToProps, { scoreUpperSection } )(ScoreCard);