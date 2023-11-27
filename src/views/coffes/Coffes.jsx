import React from 'react'
import './Coffes.css'
import { Nav } from '../../components/nav/Nav'
import { Card } from '../../components/card/Card'
import { Steps } from '../../components/steps/Steps'
import cafeHelado from '../../assets/cafeHelado.webp'
import cafeNegro from '../../assets/cafeNegro.jpg'
import cafeLeche from '../../assets/cafeLeche.jpeg'
import cafeCapuchino from '../../assets/cafeCapuchino.jpg'
import cafeLagrima from '../../assets/cafeLagrima.webp'
import cafeExpreso from '../../assets/cafeExpreso.webp'

export const Coffes = () => {
  return (
    <section className='coffes'>
        <Nav></Nav>
        <div className="coffes-container">
            <div className="cards-container">
               <Card img={cafeHelado} text={"Cafe Frio Con Vainilla"}></Card>
               <Card img={cafeNegro} text={"Cafe Negro"}></Card>
               <Card img={cafeLeche} text={"Cafe Con Leche"}></Card>
               <Card img={cafeCapuchino} text={"Capuchino"}></Card>
               <Card img={cafeLagrima} text={"Lagrima"}></Card>
               <Card img={cafeExpreso} text={"Cafe Expreso"}></Card>
            </div>
        </div>
        {/* <div className="coffes-steps">
        <Steps></Steps>
        </div> */}
    </section>
  )
}
