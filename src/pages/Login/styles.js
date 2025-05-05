import styled from "styled-components";

export const ContainerPagina = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 20px;
`;

export const ConteudoCentralizado = styled.section`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

export const Titulo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
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
  background-color: #9353ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #7a40d5;
  }
`;

export const LinkCadastro = styled.p`
  text-align: center;
  margin-top: 1rem;

  a {
    color: #9353ff;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
