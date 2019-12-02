import React from 'react'
import PropTypes from 'prop-types'
import './HeroButton.scss'

function HeroButton({ children }) {
  return (
    <a
      href="https://handikade.github.com"
      target="_blank"
      rel="noreferrer noopener"
      className="hero-button"
    >
      {children}
    </a>
  )
}

HeroButton.propTypes = {
  children: PropTypes.string.isRequired
}

export default HeroButton
