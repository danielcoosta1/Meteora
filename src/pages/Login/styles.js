// src/pages/Login/styles.js
import styled from "styled-components";

export const ContainerPagina = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConteudoCentralizado = styled.section`
  background-color: white;
  padding: 3rem 2rem;
  margin-top: 4rem;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
`;

export const Titulo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CampoInput = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const BotaoSubmit = styled.button`
  padding: 0.75rem;
  background-color: #ffa724;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff8c00;
  }
`;

export const LinkCadastro = styled.p`
  text-align: center;
  margin-top: 1rem;

  a {
    color: #ffa724;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
