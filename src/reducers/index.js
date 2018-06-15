import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
// import layoutReducer from './layout';
// import allProductsReducer from './allProducts';

import {reducer as formReducer} from 'redux-form';

const combineRed = combineReducers({
    homeReducer,
    // allProductsReducer,
    // layoutReducer,
    form: formReducer
});

export default combineRed