import React from 'react'
import ME from '../../assets/mes.png'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Souvik Das</h1>
        <h5 className="text-light">Assistant Programmer, Bangladesh Computer Council <br></br>CS Graduate, BUET | CSCA™</h5>
        
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header