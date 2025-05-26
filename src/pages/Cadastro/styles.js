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

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }

  @media (max-width: 450px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

export const Titulo = styled.h1`
  font-size: 24px;
  color: #5e2ca5;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 450px) {
    font-size: 20px;
  }
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
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #9353ff;
  }

  @media (max-width: 450px) {
    padding: 10px;
    font-size: 15px;
  }
`;
export const BotaoSubmit = styled.button`
  padding: 12px;
  background-color: #9353ff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5e2ca5;
  }

  @media (max-width: 450px) {
    padding: 10px;
    font-size: 15px;
  }
`;

export const ConteinerLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkCadastro = styled.div`
  text-align: center;
  margin-top: 1rem;

  a {
    color: #9353ff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export const BotaoAlternativo = styled.button`
  padding: 12px;
  background-color: #ffa724;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #ff8c00;
  }

  @media (max-width: 450px) {
    padding: 10px;
    font-size: 15px;
  }
`;
export const TextoSucesso = styled.p`
  color: #333;
  font-size: 18px;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;