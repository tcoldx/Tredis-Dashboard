export const addToFavorites = (favorites, gameToAdd) => {

    const existingFavorite = favorites.find(
        game => game.id === gameToAdd.id
    );

    if (existingFavorite) {
        return  favorites.map(game => 
            game.id === gameToAdd.id
            ? {...game, quantity: game.quantity + 1}
            : game
        );
    } 

    return [...favorites]
}