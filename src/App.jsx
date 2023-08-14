import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Favorites from './pages/Favorites'
import Games from './pages/Games'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import About from './pages/About'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <div className='container'>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/games' element={<Games />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </div>
  )
}

export default App
