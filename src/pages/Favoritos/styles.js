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

export const Titulo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

export const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
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
  background-color: rgba(240, 240, 240, 0.6); /* fundo cinza claro quase transparente */
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


export const CardProdutos = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s ease;
  max-width: 400px; /* ou o tamanho que achar ideal */

  &:hover {
    transform: scale(1.03);
  }
`;

export const ImagemProduto = styled.img`
  width: 100%;
  height: 350px; /* ou o tamanho que achar ideal */
  object-fit: cover;
  border-radius: 8px; /* opcional, se quiser deixar com cantos arredondados */
`;

export const TituloProduto = styled.h3`
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
`;
export const DescricaoProduto = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

export const PrecoProduto = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const ConteinerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BotaoCarrinho = styled.button`
  background-color: #9353ff;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const ConteinerIcones = styled.div`
  display: flex;
`;

export const IconesWrapper = styled.button`
  background: transparent;

  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$favoritado ? "#FF4081" : " #9353ff")};
  transition: all 0.3s ease;

  &:hover {
    background: #e0d4ff; // Um roxinho claro no hover
    color: #5e2ca5; // Roxo mais escuro pro ícone em hover
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
