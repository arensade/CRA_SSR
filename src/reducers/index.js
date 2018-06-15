import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import {reducer as formReducer} from 'redux-form';

const combineRed = combineReducers({
    homeReducer,
    form: formReducer
});

export default combineRed