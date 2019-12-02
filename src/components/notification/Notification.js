import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import './Notification.scss'

function Notification() {
  const [isOpened, setIsOpened] = useState(true)

  const closeNotif = () => {
    setIsOpened(false)
  }

  return (
    <Collapse isOpened={isOpened}>
      <div className="notification">
        <div className="notification__container">
          <p className="notification__content">
            By accessing and using this website, you acknowledge that you have
            read and understand our{' '}
            <a
              href="https://handikade.github.io"
              target="_blank"
              rel="noreferrer noopener"
            >
              Cookie Policy
            </a>
            ,{' '}
            <a
              href="https://handikade.github.io"
              target="_blank"
              rel="noreferrer noopener"
            >
              Privacy Policy
            </a>
            , and our{' '}
            <a
              href="https://handikade.github.io"
              target="_blank"
              rel="noreferrer noopener"
            >
              Terms of Service
            </a>
            .
          </p>
          <div className="notification__spacer" />
          <div className="notification__button">
            <button type="button" onClick={closeNotif}>
              Got it
            </button>
          </div>
        </div>
      </div>
    </Collapse>
  )
}

export default Notification
