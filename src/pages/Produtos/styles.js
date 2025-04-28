import styled from "styled-components";

import { BiX } from "react-icons/bi";

export const ContainerProdutos = styled.main`
  /* ou o limite que preferir */
  display: flex;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px; /* ou o limite que preferir */
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ContainerTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FiltrosAplicados = styled.div`
  display: flex;
`;

export const FiltroSpan = styled.span`
  display: inline-block;
  margin-right: 10px;
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 14px;
  color: #333;
  position: relative;
`;

export const IconeRemover = styled(BiX)`
  position: absolute;
  top: -7px;
  right: -7px;
  cursor: pointer;
  font-size: 16px;
  color: #000;
`;

export const GridProdutos = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

export const MensagemNaoEncontrada = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff4747; /* Um tom de vermelho para chamar atenção */
  padding: 20px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: start;
  background: #fff;
  transition: transform 0.2s;
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
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
`;

export const ConteinerIcones = styled.div`
  display: flex;
  gap: 1rem;
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
