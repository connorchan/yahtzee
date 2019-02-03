import { ROLL_DIE, CHANGE_DIE_STATUS, ROLL_DICE } from './types';

export const rollDie = (id, value) => {
    return {
        type: ROLL_DIE,
        payload: { id, value }
    };
};

export const changeDieStatus = (id, status) => {
    return {
        type: CHANGE_DIE_STATUS,
        payload: { id, status }
    };
};

export const rollDice = () => {
    return {
        type: ROLL_DICE
    };
};