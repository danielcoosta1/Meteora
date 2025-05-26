import styled from "styled-components";

export const LateralContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 700px;
  max-width: 100vw;
  height: 100vh;
  background: #343a40;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1024px) {
    width: min(90vw, 500px);
  }

  @media (max-width: 768px) {
    width: 100vw;
    
  }
`;

export const HeaderLateral = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #9353ff;
  color: white;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const TituloLateral = styled.h3`
  margin: 0;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const BotaoFechar = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ListaItens = styled.ul`
  list-style: none;
  padding: 0 3rem;
  flex: 1;
  overflow-y: auto;
  margin: 1rem 0;
  color: white;
  display: ${(props) => (props.$isEmpty ? "flex" : "block")};
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 3px;
  }
`;

export const ItemCarrinho = styled.li`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  align-items: center;

 
`;

export const ImgProduto = styled.img`
  width: 100px;
  height: auto;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const ConteinerDescricaoProduto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const NomeProduto = styled.span`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ConteinerQuantidade = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h1 {
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 0.9rem;
    }
  }
`;

export const BotaoQuantidade = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid white;
  background: transparent;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    font-size: 0.9rem;
  }
`;

export const QuantidadeProduto = styled.span`
  padding: 0.3rem 1rem;
  border: 1px solid white;
  border-radius: 4px;
`;

export const PrecoProduto = styled.span`
  font-weight: bold;
  color: #daff01;
`;

export const IconeLixeira = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem;

  }
`;

export const RodapeLateral = styled.div`
  border-top: 1px solid #ccc;
  padding: 1rem 2rem;
  background-color: #343a40;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ConteinerValorTotal = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #daff01;

  h1 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    p {
      font-size: 1.2rem;
    }
  }
`;

export const ConteinerBotoes = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.7rem;
  }
`;

export const BotaoCheckout = styled.button`
  flex: 1;
  background-color: #9353ff;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #7e2dd0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;

export const BotaoLimparCarrinho = styled(BotaoCheckout)`
  background-color: transparent;
  color: white;
  border: 1px solid #daff01;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
