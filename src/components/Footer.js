import React from 'react'
import styled from 'styled-components';

const Footerl = styled.footer`
    color: white;
    cursor: pointer;
    font-size: 14px;
    padding-left: 30px;
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
