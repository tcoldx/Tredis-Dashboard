import {FavActionTypes} from './fav.types';


export const GetTheGames = gdata => ({
    type: FavActionTypes.SNATCH_THE_GAMES,
    payload: gdata
})

export const AddFav = favorite => ({
    type: FavActionTypes.ADD_FAV,
    payload: favorite
})

export const UpdateFav = newFavoritesArray => ({
    type: FavActionTypes.UPDATE_FAV,
    payload: newFavoritesArray
})