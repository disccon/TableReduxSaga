import {combineReducers} from 'redux';
import initialState from "./stateReducer";
import visibilityFilters from "./visibilityFiltersReducer";
import arrowsState from './sortStateReducer'

export default combineReducers({
    initialState,
    visibilityFilters,
    arrowsState,
});