import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import scoreReducer from './scoreReducer';

export default combineReducers({
    game: gameReducer,
    score: scoreReducer
});