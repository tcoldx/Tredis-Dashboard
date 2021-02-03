import React from "react";
import "./Adventure.styles.scss";
import GameCard from "../../Games";
import { connect } from "react-redux";

const Adventure = ({ gamesAr }) => (
  <div className="adventure-content">
    {gamesAr.games.map((game) => {
      return <GameCard key={game.id} {...game} />;
    })}
  </div>
);

const mapStateToProps = (state) => ({
  gamesAr: state.games,
});

export default connect(mapStateToProps)(Adventure);
