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
        expect(
            reducer(INITIAL_STATE, {
                type: types.ROLL_DIE,
                payload: {
                    id: 1,
                    value: 2
                }
            })
        ).toEqual({
            active: true,
            ended,
            numRolls,
            dice: [
                {
                    value: 1,
                    status: 'active'
                },
                {
                    value: 2,
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
        });
    });

    it('should handle CHANGE_DIE_STATUS', () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.CHANGE_DIE_STATUS,
                payload: {
                    id: 1,
                    status: 'holding'
                }
            })
        ).toEqual({
            active,
            ended,
            numRolls,
            dice: [
                {
                    value: 1,
                    status: 'active'
                },
                {
                    value: 1,
                    status: 'holding'
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
        });
    });

    it('should handle ROLL_DICE', () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.ROLL_DICE
            })
        ).toEqual({
            active,
            ended,
            numRolls: 1,
            dice
        });
    });
});