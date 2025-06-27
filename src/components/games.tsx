import React from 'react';
import '../styles/games.css';
import games_data from '../data/games.json';

const games = games_data.games;

function Games() {
  return (
    <div className="games">
      <h1>Games</h1>
      {games.map((game) => {
        return(
          <div className="game">
            {/* <img src={require(game.path)} /> */}
            <img src={require('../assets/celestial_clash_icon.png')}></img>
            <h2>{game.name}</h2>
            <div className="info">
              <div className="roles">
                {game.role.map((r) => {
                  return(
                    <h3>{r}</h3>
                  )
                })}
              </div>
              <ul>
                {game.description.map((desc) => {
                  return(
                    <li>{desc}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default Games;
