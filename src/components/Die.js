import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rollDie, changeDieStatus } from '../actions';

const DieWrap = styled.div`
    display: inline-block;
    margin: 10px 5px;
`;

const DieBox = styled.div`
    background: #FFF;
    height: 75px;
    width: 75px;
    border: 1px solid #000;
    border-radius: 10px;
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 15px;

    &.die-1 > div:nth-child(1) > div:nth-child(1),
    &.die-1 > div:nth-child(1) > div:nth-child(2),
    &.die-1 > div:nth-child(1) > div:nth-child(3),
    &.die-1 > div:nth-child(2) > div:nth-child(1),
    &.die-1 > div:nth-child(2) > div:nth-child(3),
    &.die-1 > div:nth-child(3) > div:nth-child(1),
    &.die-1 > div:nth-child(3) > div:nth-child(2),
    &.die-1 > div:nth-child(3) > div:nth-child(3),
    
    &.die-2 > div:nth-child(1) > div:nth-child(2),
    &.die-2 > div:nth-child(1) > div:nth-child(3),
    &.die-2 > div:nth-child(2) > div:nth-child(1),
    &.die-2 > div:nth-child(2) > div:nth-child(2),
    &.die-2 > div:nth-child(2) > div:nth-child(3),
    &.die-2 > div:nth-child(3) > div:nth-child(1),
    &.die-2 > div:nth-child(3) > div:nth-child(2),
    
    &.die-3 > div:nth-child(1) > div:nth-child(2),
    &.die-3 > div:nth-child(1) > div:nth-child(3),
    &.die-3 > div:nth-child(2) > div:nth-child(1),
    &.die-3 > div:nth-child(2) > div:nth-child(3),
    &.die-3 > div:nth-child(3) > div:nth-child(1),
    &.die-3 > div:nth-child(3) > div:nth-child(2),
    
    &.die-4 > div:nth-child(1) > div:nth-child(2),
    &.die-4 > div:nth-child(2) > div:nth-child(1),
    &.die-4 > div:nth-child(2) > div:nth-child(2),
    &.die-4 > div:nth-child(2) > div:nth-child(3),
    &.die-4 > div:nth-child(3) > div:nth-child(2),
    
    &.die-5 > div:nth-child(1) > div:nth-child(2),
    &.die-5 > div:nth-child(2) > div:nth-child(1),
    &.die-5 > div:nth-child(2) > div:nth-child(3),
    &.die-5 > div:nth-child(3) > div:nth-child(2),
    
    &.die-6 > div:nth-child(1) > div:nth-child(2),
    &.die-6 > div:nth-child(2) > div:nth-child(2),
    &.die-6 > div:nth-child(3) > div:nth-child(2) {
        visibility: hidden;
    }
`;

const DotRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 7px;
`;

const DieDot = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #000;
`;

class Die extends React.Component {
    statusMessages = {
        active: 'Active',
        disabled: 'Holding'
    };

    componentDidMount() {
        this.roll();
    }

    roll = () => {
        if (this.props.status === 'active') {
            const value = Math.floor(Math.random() * 6) + 1;
            this.props.rollDie(this.props.id, value);
        }
    }

    toggleStatus = () => {
        const status = this.props.status === 'active' ? 'disabled' : 'active';
        this.props.changeDieStatus(this.props.id, status);
    }

    render() {
        return (
            <DieWrap>
                <DieBox className={`die-${this.props.value}`}>
                    <DotRow>
                        <DieDot/>
                        <DieDot/>
                        <DieDot/>
                    </DotRow>
                    <DotRow>
                        <DieDot/>
                        <DieDot/>
                        <DieDot/>
                    </DotRow>
                    <DotRow>
                        <DieDot/>
                        <DieDot/>
                        <DieDot/>
                    </DotRow>
                </DieBox>
                <div className="die-controls">
                    <button className={`die-status ${this.props.status} ui inverted button`}
                            onClick={this.toggleStatus}
                            disabled={this.props.numRolls === 0 || !this.props.active}>{this.statusMessages[this.props.status]}
                    </button>
                </div>
            </DieWrap>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.game.dice[ownProps.id].value,
        status: state.game.dice[ownProps.id].status,
        numRolls: state.game.numRolls,
        active: state.game.active
    }
}

export default connect(mapStateToProps, { rollDie, changeDieStatus }, null, {forwardRef: true} )(Die);