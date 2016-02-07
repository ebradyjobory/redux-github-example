import * as ActionTypes from '../actions';
import merge from 'lodash/merge';
import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

function errorMessage(state = 'test', action) {
    const { type, error } = action;
    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null;
    } else if (error) {
        return error;
    }
    return state;
}

const rootReducer = combineReducers({
    routing: routeReducer,
    errorMessage
});


export default rootReducer
