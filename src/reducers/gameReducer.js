import { ROLL_DIE,
        CHANGE_DIE_STATUS,
        ROLL_DICE,
        RESET_TURN,
        SCORE_UPPER_SECTION,
        SCORE_LOWER_SECTION,
        THREE_OF_A_KIND,
        FOUR_OF_A_KIND,
        FULL_HOUSE,
        SMALL_STRAIGHT,
        LARGE_STRAIGHT,
        YAHTZEE,
        CHANCE,
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
}

const updateDie = (array, action, property) => {
    return array.map((die, index) => {
        if (index !== action.payload.id) {
            return die;
        }
        return { ...die, [property]: action.payload[property] };
    })
}

const scoreUpperSection = (value, dice) => {
    let numDice = dice.filter((die) => {
        return die.value === value;
    }).length;

    return numDice * value;
}

const scoreLowerSection = (diceCounts, section) => {
    switch(section) {
        case THREE_OF_A_KIND:
            return ofAKind(diceCounts, 3);
        case FOUR_OF_A_KIND:
            return ofAKind(diceCounts, 4);
        case FULL_HOUSE:
            return fullHouse(diceCounts);
        case SMALL_STRAIGHT:
            return smallStraight(diceCounts);
        case LARGE_STRAIGHT:
            return largeStraight(diceCounts);
        case YAHTZEE:
            return yahtzee(diceCounts);
        case CHANCE:
            return chance(diceCounts);
        default:
            return;
    }
}

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
}

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
}

const smallStraight = (diceCounts) => {
    var ssOne = (diceCounts[1] && diceCounts[2] && diceCounts[3] && diceCounts[4]);
    var ssTwo = (diceCounts[2] && diceCounts[3] && diceCounts[4] && diceCounts[5]);
    var ssThree = (diceCounts[3] && diceCounts[4] && diceCounts[5] && diceCounts[6]);

    if (ssOne || ssTwo || ssThree) {
        return 30;
    } else {
        return 0;
    }
}

const largeStraight = (diceCounts) => {
    var lsOne = (diceCounts[1] && diceCounts[2] && diceCounts[3] && diceCounts[4] && diceCounts[5]);
    var lsTwo = (diceCounts[2] && diceCounts[3] && diceCounts[4] && diceCounts[5] && diceCounts[6]);

    if (lsOne || lsTwo) {
        return 40;
    } else {
         return 0;
    }
}

const yahtzee = (diceCounts) => {
    for (let i = 1; i < 7; i++) {
        if (diceCounts[i] && diceCounts[i] === 5) {
            return 50;
        } else {
            return 0;
        }
    }
}

const chance = (diceCounts) => {
    let score = 0;
    for (let i = 1; i < 7; i++) {
        if (diceCounts[i]) {
            score += diceCounts[i];
        }
    }
    return score;
}

export default (state = INITIAL_STATE, action) => {
    let section;
    let score;

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
            section = action.payload.section;
            score = scoreUpperSection(action.payload.value, state.dice);
            return { ...state, scoreCard: {
                        ...state.scoreCard,
                        [section]: {
                            ...state.scoreCard[section],
                            completed: true,
                            score
                        }
                    }
            };
        case SCORE_LOWER_SECTION:
            let diceCounts = getDiceCount();
            section = action.payload.section;
            score = scoreLowerSection(diceCounts, section);
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