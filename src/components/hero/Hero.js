import React from 'react'
import HeroButton from './HeroButton'
import './Hero.scss'
import logo from './y-logo-white.png'

function Hero() {
  return (
    <div className="hero">
      <div className="hero__logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="hero__heading1">Hello! I&apos;m Dika Handika</h1>
      <h2 className="hero__heading2">Consult, Design, and Develop Websites</h2>
      <p className="hero__content">
        Have something great in mind? Feel free to contact me.
        <br />
        I&apos;ll help you to make it happen.
      </p>
      <div className="hero__button">
        <HeroButton>Let&apos;s Make Contact</HeroButton>
      </div>
    </div>
  )
}

export default Hero
