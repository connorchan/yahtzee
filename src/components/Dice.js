import React from 'react';
import Die from './Die';
import { connect } from 'react-redux';

import { rollDice } from '../actions';

class Dice extends React.Component {
    constructor(props) {
        super(props);
        this.dieRef1 = React.createRef();
        this.dieRef2 = React.createRef();
        this.dieRef3 = React.createRef();
        this.dieRef4 = React.createRef();
        this.dieRef5 = React.createRef();
    }

    rollDice = () => {
        this.dieRef1.current.roll();
        this.dieRef2.current.roll();
        this.dieRef3.current.roll();
        this.dieRef4.current.roll();
        this.dieRef5.current.roll();
        this.props.rollDice();
    }

    render() {
        return (
            <div className="dice-area">
                <div className="dice-wrap">
                    <Die id={0} ref={this.dieRef1} />
                    <Die id={1} ref={this.dieRef2} />
                    <Die id={2} ref={this.dieRef3} />
                    <Die id={3} ref={this.dieRef4} />
                    <Die id={4} ref={this.dieRef5} />
                </div>
                <div className="dice-controls">
                    <button onClick={this.rollDice} disabled={this.props.numRolls > 2}>Roll</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numRolls: state.game.numRolls
    }
}

export default connect(mapStateToProps, { rollDice } )(Dice);