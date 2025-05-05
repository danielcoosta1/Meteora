import styled from "styled-components";

export const ContainerPagina = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 20px;
`;

export const ConteudoCentralizado = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Titulo = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CampoInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #3b9eff;
  }
`;

export const BotaoSubmit = styled.button`
  padding: 12px;
  background-color: #3b9eff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3181d9;
  }
`;

export const LinkCadastro = styled.div`
  text-align: center;
  margin-top: 1rem;
  a {
    color: #3b9eff;
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const BotaoAlternativo = styled.button`
  padding: 12px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  &:hover {
    background-color: #218838;
  }
`;

export const TextoSucesso = styled.p`
  color: #28a745;
  font-size: 18px;
  text-align: center;
  margin-bottom: 2rem;
`;
