import React from 'react'
import PropTypes from 'prop-types'
import './HighlightBox.scss'

function HighlightBox({ title, icon, content }) {
  return (
    <div className="highlight-box">
      <div className="highlight-box__title">{title}</div>
      <div className="highlight-box__icon">{icon}</div>
      <div className="highlight-box__content">{content}</div>
    </div>
  )
}

HighlightBox.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired
}

export default HighlightBox
