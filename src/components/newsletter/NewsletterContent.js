import React from 'react'
import PropTypes from 'prop-types'
import './Newsletter.scss'

function NewsletterContent({ closeNewsletter }) {
  return (
    <div className="newsletter">
      <button
        type="button"
        className="newsletter__close"
        onClick={closeNewsletter}
      >
        &#10006;
      </button>
      <h2 className="newsletter__title">
        Get latest updates in web technologies
      </h2>
      <p className="newsletter__content">
        I write articles related to web technologies, such as design trends,
        development tools, UI/UX case studies and reviews, and more. Sign up to
        my newsletter to get them all.
      </p>
      <div className="newsletter__action">
        <input
          type="email"
          className="newsletter__action__input"
          placeholder="Email address"
        />
        <div className="newsletter__action__spacer" />
        <button type="button" className="newsletter__action__button">
          Count me in!
        </button>
      </div>
    </div>
  )
}

NewsletterContent.propTypes = {
  closeNewsletter: PropTypes.func.isRequired
}

export default NewsletterContent
