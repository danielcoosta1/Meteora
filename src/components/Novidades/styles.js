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
`;
