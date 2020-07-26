import React from 'react'

import '../assets/styless/components/CorouselItem.scss'
import imagePlay from '../assets/play-icon.png'
import imagePlus from '../assets/plus-icon.png'

export const CarouselItem = () => {
  return (
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="carousel-item__img"/>
      <div className="carousel-item__details">
        <div>
          <img src={imagePlay} alt="" className="carousel-item__details--img"/>
          <img src={imagePlus} alt="" className="carousel-item__details--img"/>
        </div>
        <p className="carousel-item__details--title">Título descriptivo</p>
        <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>
  )
}
