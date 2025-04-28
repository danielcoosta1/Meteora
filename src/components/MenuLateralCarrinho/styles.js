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
  display: ${(props) =>
    props.$isEmpty ? "flex" : "block"}; /* Flex para centralizar */
  justify-content: ${(props) =>
    props.$isEmpty ? "center" : "flex-start"}; /* Centraliza quando vazio */
  align-items: ${(props) =>
    props.$isEmpty
      ? "center"
      : "flex-start"}; /* Centraliza verticalmente quando vazio */
  height: 100%; /* Garante que o conteúdo ocupe toda a altura do container */
  color: ${(props) => (props.$isEmpty ? "#fff" : "#000")}; /* Cor do texto */
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

export const PrecoProduto = styled.span`
  font-weight: bold;
  color: #daff01;
`;

export const RodapeLateral = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ConteinerValorTotal = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #daff01;

  p {
    font-size: 1.5rem;
  }
`;

export const ConteinerBotoes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 2rem;
  
`;


export const BotaoCheckout = styled.button`
  background-color: #9353ff;  /* Cor do botão, combina com o cabeçalho */
  color: #fff;  /* Texto em branco para contraste */
  padding: 1rem 2rem;  /* Espaçamento adequado */
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #7e2dd0;  /* Tom mais escuro no hover */
    transform: scale(1.05);  /* Efeito de zoom suave */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #daff01;  /* Efeito de foco */
  }
`;

export const BotaoLimparCarrinho = styled.button`
  background-color:transparent;  /* Cor de destaque para "Limpar" */
  color: #ffffff;
  border: 1px solid #daff01;  /* Texto escuro para contraste */
  padding: 1rem 2rem;
  
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #b7d600;  /* Tom mais escuro no hover */
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #343a40;  /* Efeito de foco */
  }
`;
