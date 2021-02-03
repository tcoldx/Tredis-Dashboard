import React, { useEffect, useState } from "react";
import { MdStar } from "react-icons/md";

import "./Games.styles.scss";
import { AddFav } from "./redux/favcart/fav.actions";
import { connect } from "react-redux";

const GameCard = (props) => {
  const { id, name, background_image, setFavs, favoritos } = props;

  const Game = {
    id,
    name,
    background_image,
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
        <div className="aaa-aaa">
          <img
            width="350px"
            height="200px"
            src={props.background_image}
            alt="sss"
          />
          <MdStar
            className="custm-btn"
            onClick={() => addFavoriteToStore(Game)}
          />
        </div>

        <div className="name-game"></div>
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
