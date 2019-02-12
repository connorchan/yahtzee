import * as actions from '../actions/index';
import * as types from '../actions/types';

const dice = [
    {
        value: 2,
        status: 'active'
    },
    {
        value: 3,
        status: 'active'
    },
    {
        value: 3,
        status: 'active'
    },
    {
        value: 6,
        status: 'active'
    },
    {
        value: 4,
        status: 'active'
    }
];

describe('actions', () => {
    it('should create an action to roll a die', () => {
        const id = 1;
        const value = 2;
        const expectedAction = {
            type: types.ROLL_DIE,
            payload: {
                id,
                value
            }
        };
        expect(actions.rollDie(id, value)).toEqual(expectedAction);
    });

    it('should create an action to change a die\'s status', () => {
        const id = 1;
        const status = 'Holding';
        const expectedAction = {
            type: types.CHANGE_DIE_STATUS,
            payload: {
                id,
                status
            }
        };
        expect(actions.changeDieStatus(id, status)).toEqual(expectedAction);
    });

    it('should create an action to roll the dice', () => {
        const expectedAction = {
            type: types.ROLL_DICE,
        };
        expect(actions.rollDice()).toEqual(expectedAction);
    });

    it('should create an action to score points in the upper half of the score card', () => {
        const value = 3;
        const section = 'threes';
        const expectedAction = {
            type: types.SCORE_UPPER_SECTION,
            payload: {
                dice,
                value,
                section
            }
        };
        expect(actions.scoreUpperSection(dice, value, section)).toEqual(expectedAction);
    });

    it('should create an action to score points in the lower half of the score card', () => {
        const section = 'threes';
        const expectedAction = {
            type: types.SCORE_LOWER_SECTION,
            payload: {
                dice,
                section
            }
        };
        expect(actions.scoreLowerSection(dice, section)).toEqual(expectedAction);
    });

    it('should create an action to reset the user\'s turn', () => {
        const expectedAction = {
            type: types.RESET_TURN,
            payload: {
                dice
            }
        };
        expect(actions.resetTurn(dice)).toEqual(expectedAction);
    });

    it('should create an action to reset the game', () => {
        const expectedAction = {
            type: types.RESET_GAME
        };
        expect(actions.resetGame()).toEqual(expectedAction);
    });

    it('should create an action to end the game', () => {
        const expectedAction = {
            type: types.END_GAME
        };
        expect(actions.endGame()).toEqual(expectedAction);
    });
});