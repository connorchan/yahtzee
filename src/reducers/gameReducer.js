import { ROLL_DIE,
        CHANGE_DIE_STATUS,
        ROLL_DICE,
        RESET_TURN,
        SCORE_UPPER_SECTION } from '../actions/types';

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
    ],
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
        chance: { completed: false, score: 0 }
    }
};

const upperSectionValues = {
    1: 'aces',
    2: 'twos',
    3: 'threes',
    4: 'fours',
    5: 'fives',
    6: 'sixes'
};

function updateDie(array, action, property) {
    return array.map((item, index) => {
        if (index !== action.payload.id) {
            return item;
        }
        return { ...item, [property]: action.payload[property] };
    })
}

function scoreUpperSection(value, dice) {
    let numDice = dice.filter((die) => {
        return die.value === value;
    }).length;

    return numDice * value;
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ROLL_DIE:
            return { ...state, dice: updateDie(state.dice, action, "value") };
        case CHANGE_DIE_STATUS:
            return { ...state, dice: updateDie(state.dice, action, "status") };
        case ROLL_DICE:
            let numRolls = state.numRolls <  3 ? state.numRolls += 1 : 0;
            return { ...state, numRolls };
        case RESET_TURN:
            return { ...state, numRolls: 0 };
        case SCORE_UPPER_SECTION:
            let section = upperSectionValues[action.payload.value];
            let score = scoreUpperSection(action.payload.value, state.dice);
            return { ...state, scoreCard: {
                    ...state.scoreCard,
                    [section]: {
                        ...state.scoreCard[section],
                        completed: true,
                        score
                    }
                }
            };
        default:
            return state;
    }
}