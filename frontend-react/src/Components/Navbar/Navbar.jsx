import React from 'react'
import './Navbar.scss'
import { images } from '../../Constants'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={ images.logo } alt="Website Logo" />
      </div>
      <ul className='app__navbar-links'>
        {
          ['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar