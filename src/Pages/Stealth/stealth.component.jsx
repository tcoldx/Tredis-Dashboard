import React from "react";
import { connect } from "react-redux";
import { GetTheGames } from "../../redux/favcart/fav.actions";
import "./stealth.styles.scss";
import GameCard from "../../Games";

const Stealth = ({ gamesAr }) => {
  return (
    <div className="stealth-content">
      {gamesAr.map((game) => {
        return <GameCard key={game.id} {...game} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  gamesAr: state.games.games,
});
const mapDispatchToProps = (dispatch) => ({
  setTheGames: (games) => dispatch(GetTheGames(games)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stealth);
