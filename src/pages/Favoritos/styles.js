import styled from "styled-components";

export const BannerFavoritos = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const SecaoFavoritos = styled.section`
  text-align: start;
  max-width: 1400px; /* ou o limite que preferir */
  margin: 0 auto;
  padding: 0 2rem;
`;

export const HeaderFavoritos = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  
  margin-bottom: 5rem;
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
`;
