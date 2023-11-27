import React from 'react'
import './Home.css'
import 'animate.css';
import { Nav } from '../../components/nav/Nav'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="home">
           <Nav></Nav>
           <div className="home-container">
            <h2>Coffe World</h2>
            <h3>Todo acerca de Coffe World☕</h3>
            <Link to={"/coffes"}>Recetas</Link>
            <i className="fa-solid fa-arrow-up-long arrow" style={{color: "#ffffff"}}></i>
           </div>
        </div>
    )
}
