import {combineReducers} from 'redux';
import initialState from "./stateReducer";
import visibilityFilter from "./visibilityFilter";


export default combineReducers({
    initialState,
    visibilityFilter,
});