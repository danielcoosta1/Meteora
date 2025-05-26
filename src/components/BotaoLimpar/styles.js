// src/components/BotaoLimpar/styles.js
import styled from "styled-components";

export const ContainerBotaoLimpar = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #000;
  border: 1px solid #9353ff;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    transition: color 0.3s ease;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(147, 83, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 0.4rem 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7em;
    padding: 0.3rem 0.6rem;
  }
`;
