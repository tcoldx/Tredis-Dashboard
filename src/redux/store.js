import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {GetTheGames} from './favcart/fav.actions';
import {AddFav} from './favcart/fav.actions';

import rootReducer from './root-reducer';

const middleWares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares, thunk))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(GetTheGames)  
store.dispatch(AddFav)

export default {store};