import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Personajes from './pages/Personajes';
import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
    <NavBar />
       
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/personajes' element={<Personajes />} />
      <Route path='/personajes/:id' element={<Details />} />

    </Routes>
      
      </BrowserRouter>
  )
}

export default App
