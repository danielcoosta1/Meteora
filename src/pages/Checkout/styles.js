import styled from "styled-components";

// Breakpoints
const tablet = "1200px";

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

  @media (max-width: ${tablet}) {
    padding: 1rem;
    font-size: 1.5rem;
    margin: 2rem 0;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 1.25rem;
    margin: 1rem 0;
  }
  @media (max-width: 480px) {
    padding: 0.25rem;
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;

export const ConteinerVazio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  button {
    width: 60%;
    align-items: center;
    background-color: #9353ff;
    color: #ffffff;
  }

  @media (max-width: ${tablet}) {
    gap: 1rem;
    button {
      width: 100%;
      max-width: 300px;
    }
  }
  @media (max-width: 768px) {
    button {
      width: 80%;
      max-width: 250px;
    }
  }
  @media (max-width: 480px) {
    button {
      width: 100%;
      max-width: 200px;
    }
  }
`;

export const ContainerPrincipal = styled.main`
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;

  @media (max-width: ${tablet}) {
    padding: 0 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
`;

// Responsividade geral
export const ConteinerPrincipalCompras = styled.main`
  max-width: 90rem;
  display: flex;
  margin: 2rem auto;
  gap: 8rem;

  @media (max-width: ${tablet}) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    max-width: 35rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    max-width: 25rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    max-width: 20rem;
  }
`;

export const DetalhesCompras = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: #000;
  color: #ffffff;

  h1 {
    font-weight: 400;
  }

  @media (max-width: ${tablet}) {
    width: 100%;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.65rem;
      padding: 2rem 0;
      font-weight: 600;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 1.45rem;
    }
  }
`;

export const ListaItens = styled.ul`
  padding: 3rem 0;

  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

export const ItemLista = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 1rem 2rem;

  gap: 1rem;

  @media (max-width: ${tablet}) {
    padding: 1rem;
    flex-direction: column; 
    align-items: flex-start;
  }
`;

export const ImgProduto = styled.img`
  width: 180px;

  @media (max-width: ${tablet}) {
    width: 100%;
    max-width: 340px;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 260px;
    margin-bottom: 1rem;
  }
  @media (max-width: 480px) {
    width: 100%;
    max-width: 230px;
  }
`;

export const ConteinerDescricaoProduto = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: ${tablet}) {
    width: 100%;
    max-width: 340px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 240px;
  }
`;

export const PrecoProduto = styled.span`
  font-weight: bold;
  color: #daff01;
  display: flex;

  font-size: 1.25rem;

  @media (max-width: ${tablet}) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const NomeProduto = styled.span`
  font-weight: 700;
  margin-bottom: 1em;

  font-size: 1.35rem;

  @media (max-width: ${tablet}) {
    font-size: 1.25rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const DescricaoProduto = styled.span`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 1em;
  font-weight: 400;
  @media (max-width: ${tablet}) {
    font-size: 0.875rem;
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`;

export const ConteinerQuantidade = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    font-size: 1rem;
    text-decoration: underline;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  @media (max-width: ${tablet}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 2rem 0;

    div {
      gap: 1rem;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 0.875rem;
      padding: 0.5rem 0;
    }
    div {
      gap: 0.5rem;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 0.75rem;
    }
  }
`;

export const BotaoQuantidade = styled.button`
  border: 1px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: bold;
  text-align: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  @media (max-width: ${tablet}) {
    width: 20px;
    height: 20px;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    font-size: 0.75rem;
  }
  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    font-size: 0.65rem;
  }
  &:hover {
    background-color: #9353ff;
    color: #ffffff;
  }
  &:active {
    background-color: #7a3ed6;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #9353ff;
  }
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
`;

export const QuantidadeProduto = styled.span`
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 0.5em 1.5em;

  @media (max-width: ${tablet}) {
    padding: 0.25em 1em;
    font-size: 0.875rem;
  }
  @media (max-width: 768px) {
    padding: 0.25em 0.75em;
    font-size: 0.75rem;
  }
`;

export const BotaoRemover = styled.button`
  width: 100%;
  display: none;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #daff01;
  background-color: transparent;
  color: #daff01;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  

  svg {
    font-size: 1rem;
  }

  &:hover {
    background-color: #daff01;
    color: #000;
  }

  @media (max-width: ${tablet}) {
    display: flex;
    justify-content: center;
  }
`;

export const IconeLixeira = styled.button`
  color: #ffffff;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;

  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #9353ff;
  }

  &:active {
    color: #7a3ed6;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #9353ff;
  }
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
  &:not(:disabled) {
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    display: none;
  }
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

  @media (max-width: ${tablet}) {
    min-width: auto;
    width: 100%;
    max-height: none;
    h1 {
      font-size: 1.65rem;
      padding: 1rem 0;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 2rem;
    h1 {
      font-size: 1.45rem;
    }
  }
  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 1rem;
    h1 {
      font-size: 1.25rem;
    }
  }
`;

export const DescricaoSemProduto = styled.p``;

export const ProdutoPreco = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  @media (max-width: ${tablet}) {
    font-size: 0.85rem;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

export const TotalPreco = styled.div`
  padding: 2rem 0;
  border-top: 1px solid #daff01;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-items: center;
  font-weight: 700;

  span {
    color: #daff01;
    font-weight: 700;
    font-size: 1.25rem;
  }

  @media (max-width: ${tablet}) {
    font-size: 1rem;
    span {
      font-size: 1.15rem;
    }
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    font-size: 0.75rem;
    span {
      font-size: 0.85rem;
    }
  }
`;

export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 8rem;

  @media (max-width: ${tablet}) {
    flex-direction: column;
    width: 100%;

    button,
    a {
      width: 100%;
    }
  }
`;

export const BotaoFinalizarCompra = styled.button`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: transparent;
  color: #9353ff;
  border: 1px solid #9353ff;
  min-width: 12rem;

  &:hover {
    background-color: #9353ff;
    color: #ffffff;
  }

  &:active {
    background-color: #7a3ed6;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #9353ff;
  }
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  @media (max-width: ${tablet}) {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    min-width: 10rem;
  }
  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    min-width: 8rem;
  }
`;
