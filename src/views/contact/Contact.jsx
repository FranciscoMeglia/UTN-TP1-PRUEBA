import React from 'react'
import './Contact.css'
import { Nav } from '../../components/nav/Nav'

export const Contact = () => {
  return (
    <div className="contact">
      <Nav></Nav>
      <div className="contact-container">
        <form action="">
          <h2>Sentite libre de poder contactar a Coffe World☕</h2>
          <div className="form-1-2">
            <input type="text" placeholder='Nombre'/>
            <input type="email" placeholder='Email'/>
          </div>
          <textarea name="" placeholder='Mensaje' id="" cols="30" rows="10"></textarea>
          <button>ENVIAR</button>
        </form>
      </div>
    </div>
  )
}
