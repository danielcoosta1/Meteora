import styled from "styled-components";

const CardProduto = styled.div`
  border: 1px solid #eee;
  max-width: 500px;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;

  }
`;

const ImagemProduto = styled.img`
  width: 100%;
  height: auto;

  border-radius: 8px;
`;

const TituloProduto = styled.h3`
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const DescricaoProduto = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const PrecoProduto = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;

  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
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

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const ConteinerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ConteinerIcones = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0;
  }
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

  @media (max-width: 768px) {
    width: 30px;
    height: 35px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;

    svg {
      width: 16px;
      height: 16px;
    }
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
