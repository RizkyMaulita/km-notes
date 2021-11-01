import React from "react";
import PropTypes from 'prop-types'

export default function Card (props) {
  const { imageUrl, title, url, type } = props

  return (
    <div className="col-6 my-3">
      <div className="card h-100">
        <img
          src={imageUrl || ''} // ga ada NaN , undefined, null
          className="card-img-top"
          alt="skilvul"
        />
        <div className="card-body">
          <h5 className="card-title">{title || ''}</h5>
          <h6 className="card-subtitle mb-2">
            <span className={`badge bg-danger`}>{type || ''}</span>
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make
            up the bulk of the card's content.
          </p>
        </div>
        <div className="card-body">
          <a
            href={url || ''}
            className="btn btn-primary w-100 text-uppercase"
          >
            readmore
          </a>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string
}