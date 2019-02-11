import { ROLL_DIE, 
        CHANGE_DIE_STATUS,
        ROLL_DICE,
        SCORE_UPPER_SECTION,
        SCORE_LOWER_SECTION,
        RESET_GAME,
        RESET_TURN,
        END_GAME } from './types';

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

export const resetTurn = (dice) => {
    return {
        type: RESET_TURN,
        payload: { dice }
    };
};

export const resetGame = () => {
    return {
        type: RESET_GAME
    };
};

export const endGame = () => {
    return {
        type: END_GAME
    };
};