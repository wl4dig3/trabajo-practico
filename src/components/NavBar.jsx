import {NavLink} from 'react-router-dom';

function NavBar() {
    // eslint-disable-next-line no-unused-vars
    const changeActive = ({isActive}) => { isActive ? 'active' : undefined}
  return (
    <nav className='navbar'>
      <NavLink className='link {changeActive}' style={{marginRight: '1rem'}} to='/'>Home</NavLink>
      <NavLink className='link {changeActive}' to='/personajes'>Detail</NavLink>
    </nav>
  )
}

export default NavBar