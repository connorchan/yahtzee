import * as types from '../actions/types';
import reducer from './scoreReducer';

const INITIAL_STATE = {
    scoreCard: {
        aces: { completed: false, score: 0 },
        twos: { completed: false, score: 0 },
        threes: { completed: false, score: 0 },
        fours: { completed: false, score: 0 },
        fives: { completed: false, score: 0 },
        sixes: { completed: false, score: 0 },
        threeOfAKind: { completed: false, score: 0 },
        fourOfAKind: { completed: false, score: 0 },
        fullHouse: { completed: false, score: 0 },
        smStraight: { completed: false, score: 0 },
        lgStraight: { completed: false, score: 0 },
        yahtzee: { completed: false, score: 0 },
        chance: { completed: false, score: 0 },
        upperScore: { completed: false, score: 0 },
        upperBonus: { completed: false, score: 0 },
        upperTotal: { completed: false, score: 0 },
        lowerScore: { completed: false, score: 0 },
        grandTotal: { completed: false, score: 0 }
    }
};

describe('score reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle scoring aces', () => {
        const dice = [{value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_UPPER_SECTION,
            payload: {
                dice,
                value: 1,
                section: 'aces'
            }
        });

        expect(reduced.scoreCard.aces.score).toBe(5);
    });

    it('should handle scoring twos', () => {
        const dice = [{value: 2}, {value: 2}, {value: 2}, {value: 1}, {value: 1}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_UPPER_SECTION,
            payload: {
                dice,
                value: 2,
                section: 'twos'
            }
        });

        expect(reduced.scoreCard.twos.score).toBe(6);
    });

    it('should handle scoring threes', () => {
        const dice = [{value: 3}, {value: 2}, {value: 3}, {value: 3}, {value: 3}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_UPPER_SECTION,
            payload: {
                dice,
                value: 3,
                section: 'threes'
            }
        });

        expect(reduced.scoreCard.threes.score).toBe(12);
    });

    it('should handle scoring fours', () => {
        const dice = [{value: 4}, {value: 4}, {value: 2}, {value: 1}, {value: 1}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_UPPER_SECTION,
            payload: {
                dice,
                value: 4,
                section: 'fours'
            }
        });

        expect(reduced.scoreCard.fours.score).toBe(8);
    });

    it('should handle scoring fives', () => {
        const dice = [{value: 5}, {value: 5}, {value: 5}, {value: 5}, {value: 5}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_UPPER_SECTION,
            payload: {
                dice,
                value: 5,
                section: 'fives'
            }
        });

        expect(reduced.scoreCard.fives.score).toBe(25);
    });

    it('should handle scoring sixes', () => {
        const dice = [{value: 6}, {value: 6}, {value: 6}, {value: 1}, {value: 1}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_UPPER_SECTION,
            payload: {
                dice,
                value: 6,
                section: 'sixes'
            }
        });

        expect(reduced.scoreCard.sixes.score).toBe(18);
    });

    it('should handle scoring three of a kind', () => {
        const dice = [{value: 2}, {value: 2}, {value: 2}, {value: 1}, {value: 1}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_LOWER_SECTION,
            payload: {
                dice,
                section: 'threeOfAKind'
            }
        });

        expect(reduced.scoreCard.threeOfAKind.score).toBe(8);
    });

    it('should handle scoring four of a kind', () => {
        const dice = [{value: 4}, {value: 4}, {value: 2}, {value: 4}, {value: 4}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_LOWER_SECTION,
            payload: {
                dice,
                section: 'fourOfAKind'
            }
        });

        expect(reduced.scoreCard.fourOfAKind.score).toBe(18);
    });

    it('should handle scoring full house', () => {
        const dice = [{value: 2}, {value: 2}, {value: 2}, {value: 1}, {value: 1}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_LOWER_SECTION,
            payload: {
                dice,
                section: 'fullHouse'
            }
        });

        expect(reduced.scoreCard.fullHouse.score).toBe(25);
    });

    it('should handle scoring small straight', () => {
        const dice = [{value: 2}, {value: 5}, {value: 3}, {value: 4}, {value: 4}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_LOWER_SECTION,
            payload: {
                dice,
                section: 'smStraight'
            }
        });

        expect(reduced.scoreCard.smStraight.score).toBe(30);
    });

    it('should handle scoring large straight', () => {
        const dice = [{value: 2}, {value: 1}, {value: 5}, {value: 3}, {value: 4}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_LOWER_SECTION,
            payload: {
                dice,
                section: 'lgStraight'
            }
        });

        expect(reduced.scoreCard.lgStraight.score).toBe(40);
    });

    it('should handle scoring chance', () => {
        const dice = [{value: 2}, {value: 4}, {value: 4}, {value: 3}, {value: 6}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_LOWER_SECTION,
            payload: {
                dice,
                section: 'chance'
            }
        });

        expect(reduced.scoreCard.chance.score).toBe(19);
    });

    it('should handle scoring yahtzee', () => {
        const dice = [{value: 2}, {value: 2}, {value: 2}, {value: 2}, {value: 2}];
        const reduced = reducer(INITIAL_STATE, {
            type: types.SCORE_LOWER_SECTION,
            payload: {
                dice,
                section: 'yahtzee'
            }
        });

        expect(reduced.scoreCard.yahtzee.score).toBe(50);
    });

    it('should handle RESET_GAME', () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.RESET_GAME
            })
        ).toEqual(INITIAL_STATE);
    });

    it('should handle END_GAME', () => {
        let finishedGame = reducer(INITIAL_STATE, {type: types.END_GAME});
        expect(finishedGame.scoreCard.upperScore.completed).toBe(true) &&
        expect(finishedGame.scoreCard.upperBonus.completed).toBe(true) &&
        expect(finishedGame.scoreCard.upperTotal.completed).toBe(true) &&
        expect(finishedGame.scoreCard.lowerScore.completed).toBe(true) &&
        expect(finishedGame.scoreCard.grandTotal.completed).toBe(true);
    });
});