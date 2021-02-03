import React, { useState, useEffect } from "react";

import "./dashboard.styles.scss";
import Games from "../../characterRow";
import { connect } from "react-redux";
import { UpdateFav } from "../../redux/favcart/fav.actions";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdStar } from "react-icons/md";
/* 1. get alll items from local storage 
2.  find the item you want to remove 
3. remove wit with code 
3. store that new array into a variable 
4. set local storage with that new array */

const Dashboard = (props) => {
  const { id, background_image, favara, update, gamesArray } = props;

  const removeFavorites = (gameId) => {
    const newFavorites = favara.filter((g) => g.id !== gameId);
    update(newFavorites);
  };
  // setting up the previous slide functions
  const prevSlide = (imageId) => {
    if (gamesArray.background_image) {
      return;
    } else {
      return gamesArray[0];
    }
  };

  const nextSlide = (imageId) => {};

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favara));
  }, [favara]);

  return (
    <div className="dash-con">
      <h1 className="feature-game">Featured Games</h1>

      <div className="slider">
        <MdKeyboardArrowLeft className="left-arrow" />
        <Games />
        <MdKeyboardArrowRight
          className="right-arrow"
          onClick={() => nextSlide}
        />
      </div>

      <div className="games-card card-4">
        <div className="inner-graph">
          <span className="bodark">Favorited Games</span>
        </div>

        <div className="inner-card">
          {favara.map((game) => {
            return (
              <div className="favorites">
                <img
                  key={game.id}
                  src={game.background_image}
                  className="fav-cards"
                  alt="www"
                  width="300px"
                  height="150px"
                />
                <button
                  className="custm-btn"
                  onClick={() => removeFavorites(game.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favara: state.games.favorites,
  gameArray: state.games.games,
});

const mapDispatchToProps = (dispatch) => ({
  update: (favorite) => dispatch(UpdateFav(favorite)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
