import React from "react";

import "./Action.styles.scss";
import GameCard from "../../Games";
import { connect } from "react-redux";

const Action = ({ gamesAr }) => {
  return (
    <div className="action-content">
      {gamesAr.games.map((game) => {
        return <GameCard key={game.id} {...game} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  gamesAr: state.games,
});

export default connect(mapStateToProps)(Action);
