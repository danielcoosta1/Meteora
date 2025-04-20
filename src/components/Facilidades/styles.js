import styled from "styled-components";

export const ConteinerPrincipal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  width: 100%;
  background-color: #000;
  color: #ffffff;
  gap: 2rem;

  h1 {
    font-weight: 400;
    padding: 1rem 0;
  }
`;

export const ConteinerConteudo = styled.div`
  display: flex;
`;

export const ListaFacilidades = styled.ul`
  display: flex;
  gap: 5rem;
`;

export const ItemFacilidade = styled.li`
  display: flex;
  gap: 2rem;
`;

export const Img = styled.img``;

export const ConteinerDescricao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  h2{
    color: #DAFF01;
  }

  p{
    width: 60%;
  }
`;
