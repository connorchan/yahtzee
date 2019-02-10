/* eslint no-useless-computed-key: "off" */
import { ROLL_DIE,
        CHANGE_DIE_STATUS,
        ROLL_DICE,
        RESET_TURN,
        END_GAME } from '../actions/types';

const INITIAL_STATE = {
    active: false,
    ended: false,
    numRolls: 0,
    dice: [
        {
            value: 1,
            status: 'active'
        },
        {
            value: 1,
            status: 'active'
        },
        {
            value: 1,
            status: 'active'
        },
        {
            value: 1,
            status: 'active'
        },
        {
            value: 1,
            status: 'active'
        }
    ]
};

const resetDice = (dice) => {
    return dice.map((die) => {
        return { ...die, ['status']: 'active' };
    });
};

const updateDie = (dice, action, property) => {
    return dice.map((die, index) => {
        if (index !== action.payload.id) {
            return die;
        }
        return { ...die, [property]: action.payload[property] };
    });
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ROLL_DIE:
            return { ...state, active: true, dice: updateDie(state.dice, action, 'value') };
        case CHANGE_DIE_STATUS:
            return { ...state, dice: updateDie(state.dice, action, 'status') };
        case ROLL_DICE:
            return { ...state, numRolls: state.numRolls <  3 ? state.numRolls += 1 : 0 };
        case RESET_TURN:
            return { ...state, numRolls: 0, dice: resetDice(state.dice) };
        case END_GAME:
            return { ...state, active: false, ended: true };
        default:
            return state;
    }
}