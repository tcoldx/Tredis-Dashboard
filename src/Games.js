import React, { useEffect } from "react";
import { MdStar } from "react-icons/md";

import "./Games.styles.scss";
import { AddFav } from "./redux/favcart/fav.actions";
import { connect } from "react-redux";

const GameCard = (props) => {
  const {
    id,
    name,
    background_image,
    setFavs,
    favoritos,
    clip,
    released,
    ratings_count,
  } = props;

  const Game = {
    id,
    name,
    background_image,
    clip,
    released,
    ratings_count,
  };

  const addFavoriteToStore = (game) => {
    const itExists = (value) => {
      return favoritos.some((g) => g.id === value.id);
    };

    if (itExists(game)) return;

    setFavs(game);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <div className="games-content">
      <div className="games-card">
        <img
          className="aaa-aaa"
          width="350px"
          height="200px"
          src={props.background_image}
          alt="sss"
        />
        <div className="game-card-info">
          <h2>{Game.name}</h2>
          <div className="test-some">Rating: {Game.ratings_count}</div>
          <div className="test-some">Release: {Game.released}</div>
          <MdStar
            className="custm-btn-fav"
            onClick={() => addFavoriteToStore(Game)}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoritos: state.games.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  setFavs: (favorite) => dispatch(AddFav(favorite)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);
