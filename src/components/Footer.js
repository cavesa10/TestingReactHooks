import React from 'react'
import styled from 'styled-components';

const Footerl = styled.footer`
    color: white;
    cursor: pointer;
    font-size: 14px;
    padding-left: 30px;
    margin: 2rem 0 ;
    text-decoration: none;
    & a {
      color: white;
      cursor: pointer;
      font-size: 14px;
      padding-left: 30px;
      text-decoration: none;
    }
    & a:hover{
      text-decoration: underline;
    }
    @media (max-width: 600px){
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
`;

export const Footer = () => {
  return (
    <Footerl>
      <a href="/">Terminos de uso</a>
      <a href="/">Declaración de privacidad</a>
      <a href="/">Centro de ayuda</a>
    </Footerl>
  )
}
