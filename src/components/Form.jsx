import React from 'react'

const Form = ({handlePlatform, handleCategory, handleSort}) => {
  return (
    <>
      <form>
        <div className='select-box col'>
            <div className='d-flex col'>

                <select onChange={handleCategory} className='form-control'>
                    <option>Category</option>
                    <option value='mmorpg'>mmorpg</option>
                    <option value='shooter'>shooter</option>
                    <option value='strategy'>strategy</option>
                    <option value='moba'>moba</option>
                    <option value='racing'>racing</option>
                    <option value='sports'>sports</option>
                    <option value='social'>social</option>
                    <option value='sandbox'>sandbox</option>
                    <option value='open-world'>open-world</option>
                    <option value='survival'>survival</option>
                    <option value='pvp'>pvp</option>
                    <option value='pve'>pve</option>
                    <option value='pixel'>pixel</option>
                    <option value='voxel'>voxel</option>
                    <option value='zombie'>zombie</option>
                    <option value='turn-based'>turn-based</option>
                    <option value='first-person'>first-person</option>
                    <option value='third-Person'>third-Person</option>
                    <option value='top-down,'>top-down,</option>
                    <option value='tank'>tank</option>
                    <option value='space'>space</option>
                    <option value='sailing'>sailing</option>
                    <option value='side-scroller'>side-scroller</option>
                    <option value='superhero'>superhero</option>
                    <option value='permadeath'>permadeath</option>
                    <option value='card'>card</option>
                    <option value='battle-royale'>battle-royale</option>
                    <option value='mmo'>mmo</option>
                    <option value='mmofps'>mmofps</option>
                    <option value='mmotps'>mmotps</option>
                    <option value='3d'>3d</option>
                    <option value='2d'>2d</option>
                    <option value='anime'>anime</option>
                    <option value='fantasy'>fantasy</option>
                    <option value='sci-fi'>sci-fi</option>
                    <option value='fighting'>fighting</option>
                    <option value='action-rpg'>ction-rpg</option>
                    <option value='action'>action</option>
                    <option value='military'>military</option>
                    <option value='martial-arts'>martial-arts</option>
                    <option value='flight'>flight</option>
                    <option value='low-spec'>low-spec</option>
                    <option value='tower-defense'>tower-defense</option>
                    <option value='horror'>horror</option>
                    <option value='mmorts'>mmorts</option>
                </select>

                <select onChange={handleSort} className='form-control'>
                    <option>Sort By</option>
                    <option value='release-date'>release-date</option>
                    <option value='popularity'>popularity</option>
                    <option value='alphabetical'>alphabetical</option>
                    <option value='relevance'>relevance</option>
                </select> 

                <select onChange={handlePlatform} className='form-control'>
                    <option>Platform</option>
                    <option value='all'>All</option>
                    <option value='pc'>PC</option>
                    <option value='browser'>Browser</option>
                </select>

            </div>
        </div>
      </form>
    </>
  )
}

export default Form