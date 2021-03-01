import React from "react";
import { connect } from "react-redux";

import "./stealth.styles.scss";
import GameCard from "../../Games";

const Stealth = ({ gamesAr }) => (
  <div className="stealth-content">
    {gamesAr.map((game) => {
      return <GameCard key={game.id} {...game} />;
    })}
  </div>
);

const mapStateToProps = (state) => ({
  gamesAr: state.games.games,
});

export default connect(mapStateToProps)(Stealth);
