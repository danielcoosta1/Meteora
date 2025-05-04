// src/pages/Cadastro/styles.js
import styled from "styled-components";

export const ContainerPagina = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 1rem;
`;

export const ConteudoCentralizado = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #f9f9f9;
  padding: 3rem 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #333;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CampoInput = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffcb05;
    box-shadow: 0 0 0 2px rgba(255, 203, 5, 0.3);
  }
`;

export const BotaoSubmit = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.9rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`;

export const LinkCadastro = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;

  a {
    color: #ffcb05;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
