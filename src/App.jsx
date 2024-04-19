import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Personajes from './pages/Personajes';


function App() {

  return (
    <BrowserRouter>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/personajes'>Detail</Link>
    </nav>
       
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details' element={<Details />} />
      <Route path='/personajes' element={<Personajes />} />

    </Routes>
      
      </BrowserRouter>
  )
}

export default App
