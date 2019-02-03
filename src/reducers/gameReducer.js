import { ROLL_DIE, CHANGE_DIE_STATUS, ROLL_DICE } from '../actions/types';

const INITIAL_STATE = {
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

function updateDie(array, action, property) {
    return array.map((item, index) => {
        if (index !== action.payload.id) {
            return item;
        }
        return { ...item, [property]: action.payload[property] };
    })
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ROLL_DIE:
            return { ...state, dice: updateDie(state.dice, action, "value") };
        case CHANGE_DIE_STATUS:
            return { ...state, dice: updateDie(state.dice, action, "status") };
        case ROLL_DICE:
            let numRolls = state.numRolls <  2 ? state.numRolls += 1 : 0;
            return { ...state, numRolls };
        default:
            return state;
    }
}