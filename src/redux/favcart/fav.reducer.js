import {FavActionTypes} from './fav.types';

const favoritesFromLocalStorage = localStorage.getItem('favorites');

let defaults;
if(favoritesFromLocalStorage) {
    const parsedLocalStorageData = JSON.parse(favoritesFromLocalStorage)
    defaults = parsedLocalStorageData;
} 

const INITIAL_STATE = {
    games: [],
    favorites: defaults || [] 
}
// just wanted to see how it was set up cuz I forgot
const favReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FavActionTypes.SNATCH_THE_GAMES: 
            return { 
                ...state,
                games: action.payload
            }

        case FavActionTypes.ADD_FAV:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case FavActionTypes.UPDATE_FAV:
            return {
                ...state,
                favorites: action.payload
            }

        default: 
            return state
    }
}


export default favReducer;