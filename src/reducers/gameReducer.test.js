import * as types from '../actions/types';
import reducer from './gameReducer';

const active = false;
const ended = false;
const numRolls = 0;
const dice = [
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
];

const INITIAL_STATE = {
    active,
    ended,
    numRolls,
    dice
};

describe('game reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle ROLL_DIE', () => {
        let reduced = reducer(INITIAL_STATE, {
            type: types.ROLL_DIE,
            payload: {
                id: 1,
                value: 2
            }
        });

        expect(reduced.ended).toBe(false) && expect(reduced.dice[1].value).toBe(2);
    });

    it('should handle CHANGE_DIE_STATUS', () => {
        let reduced = reducer(INITIAL_STATE, {
            type: types.CHANGE_DIE_STATUS,
            payload: {
                id: 1,
                status: 'holding'
            }
        });

        expect(reduced.dice[1].status).toBe('holding');
    });

    it('should handle ROLL_DICE', () => {
        let reduced = reducer(INITIAL_STATE, {
            type: types.ROLL_DICE
        });
        expect(reduced.numRolls).toBe(1);
    });
});