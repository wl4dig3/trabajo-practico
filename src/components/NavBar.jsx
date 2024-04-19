import {Link} from 'react-router-dom';
import {useState} from 'react'

function NavBar() {
    const [isActive, setIsActive] = useState(false);
    const changeActive = () => {
        
    }
  return (
    <nav className='navbar'>
      <Link className='link' style={{marginRight: '1rem'}} to='/'>Home</Link>
      <Link className='link' to='/personajes'>Detail</Link>
    </nav>
  )
}

export default NavBar