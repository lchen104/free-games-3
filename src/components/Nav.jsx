import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const Nav = () => {
  return (
    <div className='mt-4'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                
                    <LinkContainer className='nav-link' to='/'>
                    <li className="nav-item p-2">Home</li>
                    </LinkContainer>

                    <LinkContainer className='nav-link' to='/favorites'>
                    <li className="nav-item p-2">Favorites</li>
                    </LinkContainer>
                
                    <LinkContainer className='nav-link' to='/games'>
                    <li className="nav-item p-2">Games</li>
                    </LinkContainer>
                
                    <LinkContainer className='nav-link' to='/contact'>
                    <li className="nav-item p-2">Contact</li>
                    </LinkContainer>

                    <LinkContainer className='nav-link' to='/about'>
                    <li className="nav-item p-2">About</li>
                    </LinkContainer>

                </ul>
            </div>

        </nav>
    </div>
  )
}

export default Nav