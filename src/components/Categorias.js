import React from 'react'
import '../assets/styless/components/Categorias.scss'

export const Categorias = ({children, title}) => (
  <div className="categories">
      <h3 className="categories__title" >{title}</h3>
      {children}
  </div>
)
  
