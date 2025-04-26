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
`;
