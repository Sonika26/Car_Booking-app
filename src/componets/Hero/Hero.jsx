import React from 'react'
import "./Hero.css"
import HeroImage from "../../assets/heroimage.jpg"
import StatsBanner from './StatsBanner'


const Hero = () => {
  return (
    <div className="hero-section">
        <div className="hero-container">
            <h1 className="hero-line">
                 "Find The Perfect <span className="span-tag"> Ride For Your next </span> Adventure"
            </h1> 
          <StatsBanner />
        </div>
        <div className="hero-image">
           <img src={HeroImage} className="hero-img">
           </img>
        </div>
    </div>
  )
}

export default Hero
