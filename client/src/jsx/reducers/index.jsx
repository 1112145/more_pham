import { combineReducers } from 'redux';
import { language } from './language';
import { food_detail } from './food';

export default combineReducers({
    language,
    food_detail
})