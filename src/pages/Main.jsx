import React from 'react'
import axios from 'axios';

import { useState, useEffect } from 'react'

import Form from '../components/Form';
import Heading from '../components/Heading'
import GameDetails from '../components/GameDetails';
import GameList from '../components/GameList';
import Footer from '../components/Footer'

import { StyledFooter } from '../components/styles/Footer.styled'
// import { StyledHeader } from '../components/styles/Header.styled'
import { StyledGameList } from '../components/styles/GameList.styled'
import { StyledGameDetails } from '../components/styles/GameDetails.styled';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

import AddFavorites from '../components/AddFavorites'
import RemoveFavorites from '../components/RemoveFavorites'




const Main = () => {

  const [platform, setPlatform] = useState()
  const [category, setCategory] = useState()
  const [sort, setSort] = useState()

  // for fetching game details from separate api
  const [gameDetail, setGameDetail] = useState([])
  const [gameId, setGameId] = useState('452')
  
  // api doc https://rapidapi.com/digiwalls/api/free-to-play-games-database/

  const gameDetailAPI = 'https://free-to-play-games-database.p.rapidapi.com/api/game'
  const gameList = 'https://free-to-play-games-database.p.rapidapi.com/api/games'

  const [games, setGames] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [endpoint, setEndpoint] = useState(gameList)

  // function to load games from API call
  const getGames = async () =>{

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = endpoint;

        const options = {
        method: 'GET',
        url: endpoint,
        params: {
            platform: platform,
            category: category,
            'sort-by': sort
        },
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            const result = response.data;
            // console.log(response.data);
            if (result) {
                setGames(result)
            } else {
                console.log('No Data Found')
            }
        } catch (error) {
            console.error(error);
        }

    // console.log(url)
  }


  useEffect(() => {
    getGames({games})
  }, [platform, category, sort, gameId])

  useEffect(() => {
    const gameFavorites = JSON.parse(
      localStorage.getItem('react-game-app-favorites')
      )

      setFavorites(gameFavorites)
  }, [])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-game-app-favorites', JSON.stringify(items))
  }

  // function to add to favorites
  const handleAddFavorites = (game) => {
      // checks for duplicate before adding into the favorites array
      const exists = favorites.find(favorite => favorite.id === game.id)
      if (exists) return;

      // add to favorites array only if no duplicates were found
      const newFavoritesList = [...favorites, game]
      setFavorites(newFavoritesList)
      saveToLocalStorage(newFavoritesList)
  }

  // function to remove from array
  const handleRemoveFavorites = (game) => {
    const newFavoriteList = favorites.filter((favorite)=> favorite.id !== game.id)

    setFavorites(newFavoriteList)
    saveToLocalStorage(newFavoriteList)
  }

  const handlePlatform = (e) => {
    setPlatform(e.target.value)
    // console.log(gamePlatCatSort)
    // console.log(platform)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
    // console.log(gamePlatCatSort)
    // console.log(category)
  }

  const handleSort = (e) => {
    setSort(e.target.value)
    // console.log(gamePlatCatSort)
    // console.log(sort)
  }



  const getDetails = async () => {

      const apiKey = import.meta.env.VITE_API_KEY;
      
      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: gameId},
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        // console.log(response.data);
        const result = response.data;
        if (result) {
          setGameDetail(result)
        } else {
          console.log('No Data Dound')
        }
        
      } catch (error) {
        console.error(error);
      }    
  }

  useEffect(() => {
    // const randomId = Math.floor(Math.random() * games.length)
    // console.log(games.length)
    getDetails()
  }, [gameId])

  const handleGameId = (id) => {
    // alert(id)
    setGameId(id)
  }










  return (
    <div className='container mt-4'>

    <Form 
        handlePlatform={handlePlatform}
        handleCategory={handleCategory}
        handleSort={handleSort}
        platform={platform} 
        setPlatform={setPlatform} 
        category={category} 
        setCategory={setCategory}
        sort={sort} 
        setSort={setSort}
      />

      <Heading games={favorites} heading={'Featured'} />
      <StyledGameDetails>
        <GameDetails gameDetail={gameDetail} setGameDetail={setGameDetail} gameId={gameId} setGameId={setGameId}/>
      </StyledGameDetails>

      {/* {
        favorites.length > 0 && ( // checks to make sure favorites contains somthing before we render the favorites heading */}
          <StyledGameList>
            <Heading games={favorites} heading={'Favorites'} />
            <GameList games={favorites} handleFavoritesClick={handleRemoveFavorites} favoriteComponent={RemoveFavorites} />
          </StyledGameList>
        {/* )
      } */}

      {/* {
        games.length > 0 && ( // checks to make sure games contains somthing before we render the games heading */}
          <StyledGameList>
            <Heading games={games} heading={'Games'} />
            <GameList games={games} handleFavoritesClick={handleAddFavorites} favoriteComponent={AddFavorites} handleGameId={handleGameId} />
          </StyledGameList>          
        {/* )

      } */}


      <StyledFooter>
        <Footer />
      </StyledFooter>


    </div>
  )
}

export default Main