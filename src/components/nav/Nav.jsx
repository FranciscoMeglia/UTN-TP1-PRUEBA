import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import coffeLogo from '../../assets/coffe.png'
import './Nav.css'

export const Nav = () => {

  const [nav , setNav] = useState(false)

  return (
    <nav className={nav ? 'navMobile' : 'nav'}>
      <div className="nav-logo">
        <Link to={"/"}>
        <img src={coffeLogo} alt="coffe logo" />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <li><Link to={"/"} onClick={() => {document.body.style.overflowY = "auto"}}>Home</Link></li>
          <li><Link to={"/coffes"} onClick={() => {document.body.style.overflowY = "auto"}}>Recetas</Link></li>
          <li><Link to={"/contact"} onClick={() => {document.body.style.overflowY = "auto"}}>Contacto</Link></li>
        </ul>
      </div>
      {nav ? <i className="fa-solid fa-xmark navBtn" style={{color: "#ffffff"}} onClick={() => {setNav(false) , document.body.style.overflowY = "auto"}}></i> : <i class="fa-solid fa-bars navBtn" style={{color: "#ffffff"}} onClick={() => {setNav(true) , document.body.style.overflowY = "hidden"}}></i>}
    </nav>
  )
}
