import React from 'react'
import { NavLink} from 'react-router-dom';

function Navbar() {
    const navlinkstyles=({isActive})=>{
        return{
fontWeight: isActive?'bold':'normal'
        }

    }
  return (
    <nav>
   < NavLink style={navlinkstyles} to='/'>Home</NavLink>
      <NavLink style={navlinkstyles} to='/about'>About</NavLink>
      <NavLink style={navlinkstyles} to='/order-summary'> Ordersummary</NavLink>
    </nav>
  )
}

export default Navbar
