import { ROLL_DIE, CHANGE_DIE_STATUS, ROLL_DICE, RESET_TURN, SCORE_UPPER_SECTION, SCORE_LOWER_SECTION } from './types';

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

export const resetTurn = () => {
    return {
        type: RESET_TURN
    };
};

export const scoreUpperSection = (dice, value, section) => {
    return {
        type: SCORE_UPPER_SECTION,
        payload: { dice, value, section }
    };
};

export const scoreLowerSection = (dice, section) => {
    return {
        type: SCORE_LOWER_SECTION,
        payload: { dice, section }
    };
};