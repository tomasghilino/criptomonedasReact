import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
  color: #fff;
  height: 250px;
  background-color: #6565eb;
  padding: 1.5rem;
  margin-top: 2rem;
  font-family: sans-serif;
  border-radius: 5%;
  box-shadow: -12px 7px 21px -11px rgba(0, 0, 0, 0.81);
  -webkit-box-shadow: -12px 7px 21px -11px rgba(0, 0, 0, 0.81);
  -moz-box-shadow: -12px 7px 21px -11px rgba(0, 0, 0, 0.81);
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;

  &::after {
    margin-top: 15px;
    content: '';
    width: 25%;
    background-color: #3939bd;
    height: 6px;
    display: block;
  }
`;
const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null; // Si el objeto que llega es vacio

  return (
    <ResultadoDiv>
      <Precio>
        El Precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        Precio más alto del día: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        Precio más bajo del día: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variación última 24hs: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última Actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

export default Cotizacion;
