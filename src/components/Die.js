import React from 'react';
import { connect } from 'react-redux';
import { rollDie, changeDieStatus } from '../actions'

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

    setStatus(status) {
        this.props.changeDieStatus(this.props.id, status);
    }

    toggleStatus = () => {
        const status = this.props.status === 'active' ? 'disabled' : 'active';
        this.props.changeDieStatus(this.props.id, status);
    }

    render() {
        return (
            <div className="die-wrap">
                <div className="die">{this.props.value}</div>
                <div className="die-controls">
                    <button className={'die-status ' + this.props.status}
                            onClick={this.toggleStatus}>{this.statusMessages[this.props.status]}
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.game.dice[ownProps.id].value,
        status: state.game.dice[ownProps.id].status
    }
}

export default connect(mapStateToProps, { rollDie, changeDieStatus })(Die);