import styled from "styled-components";

export const LateralContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 700px;
  height: 100vh;
  background: #343a40;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

export const HeaderLateral = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px 24px 80px;
  gap: 20px;
  width: 100%;
  min-height: 82px;
  border-radius: 4px 4px 0px 0px;
  background-color: #9353ff;
  color: #ffffff;
`;

export const TituloLateral = styled.h3`
  margin: 0;
`;

export const BotaoFechar = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  padding: 1rem;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  &:hover {
    
    transform: scale(1.3);
  }
`;

export const ListaItens = styled.ul`
  list-style: none;
  padding: 0;
  flex: 1;
  margin: 1rem 0;
`;

export const ItemCarrinho = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

export const NomeProduto = styled.span``;

export const QuantidadeProduto = styled.span``;

export const PrecoProduto = styled.span`
  font-weight: bold;
`;

export const RodapeLateral = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 1rem;
`;

export const BotaoCheckout = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #000;
  color: #fff;
  border: none;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
