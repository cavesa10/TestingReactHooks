import React from 'react'
import '../assets/styless/components/Search.scss'

export const Search = () => {
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className="input" placeholder="Buscar..."/>
  </section>
  )
}