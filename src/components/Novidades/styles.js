import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  max-width: 800px;
  margin: 2rem auto;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  gap: 2rem;
  background-color: #f9f9f9;
  border: 1px solid #000000;
 
  
`;

export const Titulo = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  max-width: 600px;
  font-weight: 400;
  @media (max-width: 1200px) {
    font-size: 1.25rem;
  }
  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
  @media (max-width: 600px) {
    font-size: .85rem;
  }
  @media (max-width: 400px) {
    
  }
`;

export const Formulario = styled.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  
`;

export const InputEmail = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 250px;
  font-size: 1rem;

  @media (max-width: 600px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    min-width: 200px;
  }
`;

export const Botao = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #9353ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #7e42e0;
  }

  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
  @media (max-width: 400px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.65rem;
  }
`;
