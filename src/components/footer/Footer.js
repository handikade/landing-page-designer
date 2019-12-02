import React from 'react'
import './Footer.scss'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="footer">
      &copy;{year} Dika Handika. All rights reserved.
    </div>
  )
}

export default Footer
