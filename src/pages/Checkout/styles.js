import styled from "styled-components";

export const BannerCheckout = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ConteinerPrincipalVazio = styled.main`
  padding: 2rem;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  background-color: #000000;
  border: none;
  margin: 5rem 0;
  color: #ffffff;
  font-size: 2rem;
`;

export const ConteinerVazio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 60%;
    align-items: center;
    background-color: #9353ff;
    color: #ffffff;
  }
`;

export const ContainerPrincipal = styled.main`
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;

`;

export const ConteinerPrincipalCompras = styled.main`
  max-width: 90rem;
  display: flex;
  margin: 2rem auto;
  gap: 8rem;
`;

export const DetalhesCompras = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 2rem;
  background-color: #000;
  color: #ffffff;

  h1 {
    font-weight: 400;
  }
`;

export const ListaItens = styled.ul`
  padding: 3rem 0;
`;

export const ItemLista = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 1rem 2rem;
`;

export const ImgProduto = styled.img`
  width: 180px;
  margin-right: 2rem;
`;

export const ConteinerDescricaoProduto = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-left: -5rem;
`;

export const PrecoProduto = styled.span`
  font-weight: bold;
  color: #daff01;
`;

export const NomeProduto = styled.span`
  font-weight: 700;
  margin-bottom: 1em;
`;

export const ConteinerQuantidade = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1em;
  }
`;

export const BotaoQuantidade = styled.button`
  border: 1px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const QuantidadeProduto = styled.span`
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 0.5em 1.5em;
`;

export const IconeLixeira = styled.button`
  color: #ffffff;
  background-color: transparent;
  border: none;
`;

export const DetalhesPagamento = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #ffffff;
  max-height: 400px;
  min-width: 348px;
  padding: 1rem 2rem;
  gap: 3rem;
  h1 {
    font-weight: 400;
  }
`;

export const DescricaoSemProduto = styled.p``;

export const ProdutoPreco = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalPreco = styled.div`
  padding: 2rem 0;
  border-top: 1px solid #daff01;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-items: center;

  span {
    color: #daff01;
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 8rem;
`;

export const BotaoFinalizarCompra = styled.button`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: transparent;
  color: #9353ff;
  border: 1px solid  #9353ff;
  min-width: 12rem;

  &:hover {
    background-color: #9353ff;
    color: #ffffff;
  }
`;
