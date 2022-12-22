import React from 'react'
import './Navbar.scss'
import { images } from '../../Constants'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={ images.logo } alt="Website Logo" />
      </div>
    </nav>
  )
}

export default Navbar