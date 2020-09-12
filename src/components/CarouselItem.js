import React from 'react'
import PropTypes from 'prop-types'

import '../assets/styless/components/CorouselItem.scss'
import imagePlay from '../assets/static/play-icon.png'
import imagePlus from '../assets/static/plus-icon.png'

export const CarouselItem = ({ cover, title, year, contentRating, duration }) => {


  return (
    <div className="carousel-item">
      <img src={cover} alt={title} className="carousel-item__img" />
      <div className="carousel-item__details">
        <div>
          <img src={imagePlay} alt="" className="carousel-item__details--img" />
          <img src={imagePlus} alt="" className="carousel-item__details--img" />
        </div>
        <p className="carousel-item__details--title">{title}</p>
  <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} minutos`}</p>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number

}