import styled, { keyframes } from "styled-components";

const animarEntrada = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const animarLinha = keyframes`
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 100%;
    opacity: 1;
  }
`;

export const ContainerTitulo = styled.div`
  text-align: start;
  animation: ${animarEntrada} 0.6s ease forwards;
  margin: 3rem 0;
`;

export const TituloEstilizado = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 2.5rem;
    color: #9353ff;
  }
`;

export const LinhaDecorativa = styled.div`
  height: 3px;
  background-color: #ccc;

  border-radius: 4px;
  animation: ${animarLinha} 0.6s ease forwards;
  animation-delay: 0.3s;
  width: 80%; /* Faz a linha crescer conforme o texto */
  position: absolute;
  bottom: -2px;
  left: 0;
`;
