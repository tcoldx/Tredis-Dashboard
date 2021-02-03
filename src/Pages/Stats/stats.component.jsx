import React from "react";
import GameCard from "../../Games";
import { connect } from "react-redux";

import "./stats.styles.scss";

const Stats = ({ gamesAr }) => (
  <div className="stats-content">
    {gamesAr.games.map((game, i) => {
      return <GameCard key={game.id} {...game} />;
    })}
  </div>
);
const mapStateToProps = (state) => ({
  gamesAr: state.games,
});

export default connect(mapStateToProps)(Stats);
