import {combineReducers} from 'redux';

import favReducer from './favcart/fav.reducer';

export default combineReducers({
    games: favReducer
})