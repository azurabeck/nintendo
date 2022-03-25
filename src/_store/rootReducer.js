import { combineReducers } from 'redux';
import nintendo from './reducer/nintendoReducer';

const rootReducer = combineReducers({
    nintendo: nintendo,
});

export default rootReducer;