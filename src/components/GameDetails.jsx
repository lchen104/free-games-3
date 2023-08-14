import axios from 'axios';
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
// import { StyledGameDetails } from './styles/GameDetails.styled';

const GameDetails = ({gameDetail}) => {

  return (
    <>
    <div className='container'>
        <h1>{gameDetail.title} <a className="btn btn-primary" href={gameDetail.game_url} role="button">Click to Play</a></h1>
        <p>
            {gameDetail.short_description}
        </p>
        <p>{gameDetail.description}</p>

            <div className='container row mt-4 d-flex flex-nowrap'>
            {
              gameDetail.screenshots ? 
                gameDetail.screenshots.map((item, index) => {
                  return (
                    <div className='container col d-flex' key={index}>
                      <img className='img-thumbnail' key={index} src={item.image} />
                    </div>
                    )
                })
              : null

            }
            </div>

    </div>
    </>
  )
}

export default GameDetails