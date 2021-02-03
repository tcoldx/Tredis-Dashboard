
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import GameCard from './Games';
import './characterRow.styles.scss';
import { GetTheGames } from './redux/favcart/fav.actions';


const Games = ({gameArray, setTheGames}) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
            setLoading(true)
            axios.get('https://api.rawg.io/api/games?page=1')
            .then(res => {
                const newGameArray = res.data.results.map(game => {
                    return { 
                        ...game, favorite: true
                    }
                })

                setTheGames(newGameArray)
                setLoading(false)
            }).catch(error => console.log(error))
    }, []);
            if (!loading) {
            return (
                <div className='Card-contain'>
                     {
                     gameArray.map((game, i) => {
                         if (i < 3) {
                         return (
                             <GameCard
                             key={game.id}
                             {...game}
                             />
                         )  
                        }
                     })
                         
                    }
                
                </div>
            ) 
                } else {
                    return <p>Loading Games...</p>
                }
        }

const mapStateToProps = state => ({
   gameArray: state.games.games,
})


const mapDispatchToProps = dispatch => ({
    setTheGames: (games) => dispatch(GetTheGames(games)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Games);