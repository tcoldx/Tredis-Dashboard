import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './stealth.styles.scss';
import GameCard from '../../Games';

const Stealth = ({gamesAr}) => (
  <div className='stealth-content'>

 {
   gamesAr.games.map((game, i) => {
     return (
        <GameCard key={game.id} {...game}/>
     )
   })
  
   }
</div>
)

const mapStateToProps = state => ({
  gamesAr: state.games
})

export default withRouter(connect(mapStateToProps)(Stealth));