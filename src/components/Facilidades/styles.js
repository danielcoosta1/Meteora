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
    font-weight: 600;
    padding: 1rem 0;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 950px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 411px) {
    h1 {
      font-size: 1rem;
    }
  }
 





`;

export const ConteinerConteudo = styled.div`
  display: flex;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ListaFacilidades = styled.ul`
  display: flex;

  gap: 5rem;

  @media (max-width: 1200px) {
    gap: 2rem;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }
`;

export const ItemFacilidade = styled.li`
  display: flex;
  gap: 2rem;
 

  @media (max-width: 950px) {
    
    width: 100%;
    max-width: 400px;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  @media (max-width: 1200px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 950px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 450px) {
    width: 40px;
    height: 40px;
  }
`;

export const ConteinerDescricao = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1em;

  h2 {
    color: #daff01;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    color: #ffffff;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 950px) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 420px) {
    h2 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
