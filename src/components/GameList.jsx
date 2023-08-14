import React from 'react'

const GameList = ({games, handleFavoritesClick, favoriteComponent, handleGameId}) => {

    const FavoriteComponent = favoriteComponent;

    const loaded = () => {
        return (
            <div className='container'>

                {
                    games.map((game, index) => (
                        
                        <div className='item image-container' key={index}>
                            {/* <a href={game.game_url} target='_blank' ><img src={game.thumbnail} alt={game.title} /></a> */}
                            <a href={game.game_url} target='_blank' ><img src={game.thumbnail} alt={game.title} onClick={() => handleGameId(game.id)} /></a>
                            <div onClick={() => handleFavoritesClick(game)} className='overlay'>
                                <FavoriteComponent />
                            </div>
                        </div>
                            
                    ))
                }

            </div>
        )
    };

    const loading = () => {
        return <h1>No Games to Display</h1>
    };
    // console.log(games)
    return games ? loaded() : loading();

}

export default GameList