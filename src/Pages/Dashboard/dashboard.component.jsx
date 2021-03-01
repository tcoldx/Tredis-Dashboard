import React, { useEffect, useState } from "react";

import "./dashboard.styles.scss";
import Games from "../../characterRow";
import { connect } from "react-redux";
import { UpdateFav } from "../../redux/favcart/fav.actions";
import ImageSlider from "../../slider";
import { AiOutlineClose } from "react-icons/ai";
/* 1. get alll items from local storage 
2.  find the item you want to remove 
3. remove wit with code 
3. store that new array into a variable 
4. set local storage with that new array */

const Dashboard = (props) => {
  const { favara, update, gameItems } = props;
  const [images, setImages] = useState([]);

  const removeFavorites = (gameId) => {
    const newFavorites = favara.filter((g) => g.id !== gameId);
    update(newFavorites);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favara));
    const itGame = gameItems.map((game) => {
      return game.background_image;
    });
    setImages(itGame);
  }, [favara, gameItems]);

  // jsx rendering a component that return a slide of games that are imported from another component
  return (
    <div className="dash-con">
      <h1 className="feature-game">Featured Games</h1>
      <div className="slideshow">
        <ImageSlider images={images} />
      </div>

      <div className="nedd">
        <Games />
      </div>
      <div className="games-card card-4">
        <div className="inner-graph">
          <span className="bodark">Favorited Games</span>
        </div>

        <div className="inner-card">
          {favara.map((game) => {
            return (
              <div className="favorites">
                <div className="remove-button-contain">
                  <AiOutlineClose
                    className="remove-button"
                    onClick={() => removeFavorites(game.id)}
                  />
                </div>
                <img
                  key={game.id}
                  src={game.background_image}
                  className="fav-cards"
                  alt="www"
                  width="300px"
                  height="150px"
                />
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
  gameItems: state.games.games,
});

const mapDispatchToProps = (dispatch) => ({
  update: (favorite) => dispatch(UpdateFav(favorite)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
