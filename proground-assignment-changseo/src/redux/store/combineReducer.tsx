import { combineReducers } from 'redux';
import userData from './userData';
import viewAll from './viewAll';

export default combineReducers({
    userData,
    viewAll
})