import styled from "styled-components";

const CardProduto = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const ImagemProduto = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 8px;
`;

const TituloProduto = styled.h3`
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
`;

const DescricaoProduto = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const PrecoProduto = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;

const BotaoCarrinho = styled.button`
  background-color: #9353ff;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ConteinerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ConteinerIcones = styled.div`
  display: flex;
`;

const IconesWrapper = styled.button`
  background: transparent;
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$favoritado ? "#FF4081" : "#9353ff")};
  transition: all 0.3s ease;

  &:hover {
    background: #e0d4ff;
    color: #5e2ca5;
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export {
  CardProduto,
  ImagemProduto,
  TituloProduto,
  DescricaoProduto,
  PrecoProduto,
  BotaoCarrinho,
  ConteinerBotoes,
  ConteinerIcones,
  IconesWrapper,
};
