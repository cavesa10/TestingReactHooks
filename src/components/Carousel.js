import React from 'react'
import '../assets/styless/components/Carousel.scss'

export const Carousel = ({ children }) => {
  return (
    <section className="carousel">
      <div className="carousel__container">
        {children}
      </div>
    </section>
  )
}
