import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import Cookie from 'js-cookie'
import NewsLetterContent from './NewsletterContent'

function Newsletter() {
  const [isShow, setIsShow] = useState(false)

  let trackLength = 0

  const determineUserScrollDepth = () => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.parentNode.scrollTop ||
      document.body.scrollTop

    if (scrollTop > (1 / 3) * trackLength) {
      if (Cookie.get('newsletter-timeout')) {
        if (new Date().getTime() > Cookie.get('newsletter-timeout')) {
          setIsShow(true)
        }
      } else {
        setIsShow(true)
      }
    }
  }

  const closeNewsletter = () => {
    const timeOut = new Date().getTime() + 10 * 60 * 1000
    Cookie.set('newsletter-timeout', timeOut)
    setIsShow(false)
  }

  useEffect(() => {
    const winheight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight

    const docheight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    trackLength = docheight - winheight

    window.addEventListener('scroll', determineUserScrollDepth)

    return () => {
      window.removeEventListener('scroll', determineUserScrollDepth)
    }
  })

  // return isShow ? <NewsLetterContent closeNewsletter={closeNewsletter} /> : null
  return (
    <CSSTransition in={isShow} timeout={300} classNames="slide" unmountOnExit>
      <NewsLetterContent closeNewsletter={closeNewsletter} />
    </CSSTransition>
  )
}

export default Newsletter
