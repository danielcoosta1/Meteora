import styled from "styled-components";

export const BannerFavoritos = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const SecaoFavoritos = styled.section`
  display: flex;
  flex-direction: column;

  text-align: start;
  max-width: 1400px; /* ou o limite que preferir */
  margin: 0 auto;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0;
  }

`;

export const HeaderFavoritos = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 1.5rem;
`;

export const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  gap: 2rem;
  padding: 0 1.5rem;

  
  @media (max-width: 768px) {
    
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const ConteinerVazio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: rgba(
    240,
    240,
    240,
    0.6
  ); /* fundo cinza claro quase transparente */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  h1 {
    font-size: 1.5rem;
    color: #444;
  }

  button {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {

    padding: 1rem;
    h1{
      font-size: 1.2rem;
    }
  }
`;
