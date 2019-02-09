import { ROLL_DIE,
        CHANGE_DIE_STATUS,
        ROLL_DICE,
        RESET_TURN,
        SCORE_UPPER_SECTION,
        SCORE_LOWER_SECTION,
        END_GAME } from '../actions/types';

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

const getDiceCount = (dice) => {
    let counts = {};
    for (let i = 0; i < dice.length; i++) {
        if (counts.hasOwnProperty(dice[i].value)) {
            counts[dice[i].value] += 1;
        } else {
            counts[dice[i].value] = 1;
        }
    }
    return counts;
};

const updateDie = (dice, action, property) => {
    return dice.map((die, index) => {
        if (index !== action.payload.id) {
            return die;
        }
        return { ...die, [property]: action.payload[property] };
    })
};

const scoreUpperSection = (value, dice) => {
    let numDice = dice.filter((die) => {
        return die.value === value;
    }).length;

    return numDice * value;
};

const scoreLowerSection = (diceCounts, section) => {
    switch(section) {
        case 'threeOfAKind':
            return ofAKind(diceCounts, 3);
        case 'fourOfAKind':
            return ofAKind(diceCounts, 4);
        case 'fullHouse':
            return fullHouse(diceCounts);
        case 'smStraight':
            return smallStraight(diceCounts);
        case 'lgStraight':
            return largeStraight(diceCounts);
        case 'yahtzee':
            return yahtzee(diceCounts);
        case 'chance':
            return chance(diceCounts);
        default:
            return;
    }
};

const ofAKind = (diceCounts, whichOfAKind) => {
    var score = 0;
    var isValid = false;
    for (let i = 1; i < 7; i++) {
        if (diceCounts[i]) {
            if (diceCounts[i] >= whichOfAKind) {
                isValid = true;
            }
            score += diceCounts[i] * i;
        }
    }
    return isValid ? score : 0;
};

const fullHouse = (diceCounts) => {
    let twoOfAKind = false;
    let threeOfAKind = false;
    for (let i = 1; i < 7; i++) {
        if (diceCounts[i]) {
            if (diceCounts[i] === 2) {
                twoOfAKind = true;
            } else if (diceCounts[i] === 3) {
                threeOfAKind = true;
            }
        }
    }

    if (twoOfAKind && threeOfAKind) {
        return 25;
    } else {
        return 0;
    }
};

const smallStraight = (diceCounts) => {
    var ssOne = (diceCounts[1] && diceCounts[2] && diceCounts[3] && diceCounts[4]);
    var ssTwo = (diceCounts[2] && diceCounts[3] && diceCounts[4] && diceCounts[5]);
    var ssThree = (diceCounts[3] && diceCounts[4] && diceCounts[5] && diceCounts[6]);

    if (ssOne || ssTwo || ssThree) {
        return 30;
    } else {
        return 0;
    }
};

const largeStraight = (diceCounts) => {
    var lsOne = (diceCounts[1] && diceCounts[2] && diceCounts[3] && diceCounts[4] && diceCounts[5]);
    var lsTwo = (diceCounts[2] && diceCounts[3] && diceCounts[4] && diceCounts[5] && diceCounts[6]);

    if (lsOne || lsTwo) {
        return 40;
    } else {
         return 0;
    }
};

const yahtzee = (diceCounts) => {
    for (let i = 1; i < 7; i++) {
        if (diceCounts[i] && diceCounts[i] === 5) {
            return 50;
        } else {
            return 0;
        }
    }
};

const chance = (diceCounts) => {
    let score = 0;
    for (let i = 1; i < 7; i++) {
        if (diceCounts[i]) {
            score += diceCounts[i];
        }
    }
    return score;
};

const updateScoreCard = (state, section, score) => {
    return {
        ...state, scoreCard: {
            ...state.scoreCard,
            [section]: {
                ...state.scoreCard[section],
                completed: true,
                score
            }
        }, numRolls: 0
    };
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ROLL_DIE:
            return { ...state, dice: updateDie(state.dice, action, "value") };
        case CHANGE_DIE_STATUS:
            return { ...state, dice: updateDie(state.dice, action, "status") };
        case ROLL_DICE:
            return { ...state, numRolls: state.numRolls <  3 ? state.numRolls += 1 : 0 };
        case RESET_TURN:
            return { ...state, numRolls: 0 };
        case SCORE_UPPER_SECTION:
            return updateScoreCard(state, action.payload.section, scoreUpperSection(action.payload.value, state.dice));
        case SCORE_LOWER_SECTION:
            return updateScoreCard(state, action.payload.section, scoreLowerSection(getDiceCount(action.payload.dice), action.payload.section));
        default:
            return state;
    }
}