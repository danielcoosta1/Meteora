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
  
  margin: 1rem 0;
  flex: 1;
  overflow-y: auto;
  padding: 0 5rem;
  
  
`;

export const ItemCarrinho = styled.li`
 border-bottom: 1px solid #ccc;
  
  display: flex;
  color: #ffffff;
    padding: 2rem 0;
`;
export const ImgProduto = styled.img`
  width: 109px;
`;

export const ConteinerDescricaoProduto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1em;
`;

export const IconeLixeira = styled.button`
  color: #ffffff;
  background-color: transparent;
  border: none;
  margin-left: auto;
`;

export const NomeProduto = styled.span``;

export const ConteinerQuantidade = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  gap: 1em;
`;

export const BotaoQuantidade = styled.button`

border: 1px solid #FFFFFF;
color: #FFFFFF;
background-color: transparent;
width: 24px;
height: 24px;
border-radius: 50%;
`;

export const QuantidadeProduto = styled.span`
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: .5em 1.5em;
`;

export const PrecoProduto = styled.span`
  font-weight: bold;
  color: #daff01;
`;

export const RodapeLateral = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 1rem;

  div{
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #DAFF01;

    p{
        font-size: 1.5rem;
    }
  }
`;

export const BotaoCheckout = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #9353FF;
  color: #fff;
  border: none;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
