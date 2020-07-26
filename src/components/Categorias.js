import React from 'react'
import '../assets/styless/components/Categorias.scss'

export const Categorias = ({children}) => (
  <div className="categories">
      <h3 className="categories__title" >Mi lista</h3>
      {children}
  </div>
)
  
