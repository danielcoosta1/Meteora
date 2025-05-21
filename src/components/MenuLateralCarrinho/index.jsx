import { useNavigate } from "react-router-dom";
import {
  LateralContainer,
  HeaderLateral,
  TituloLateral,
  BotaoFechar,
  ListaItens,
  ItemCarrinho,
  NomeProduto,
  QuantidadeProduto,
  PrecoProduto,
  RodapeLateral,
  BotaoCheckout,
  ImgProduto,
  ConteinerDescricaoProduto,
  ConteinerQuantidade,
  IconeLixeira,
  BotaoQuantidade,
  BotaoLimparCarrinho,
  ConteinerValorTotal,
  ConteinerBotoes,
} from "./styles";

import { useCarrinho } from "../../hooks/useCarrinho";

import { FaTrash } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa"; // Ícone de carrinho
import { FaSadTear } from "react-icons/fa"; // Ícone de emoticon

const MenuLateralCarrinho = () => {
  const {
    carrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerItem,
    limparCarrinho,
    totalPreco,
    fecharMenu,
  } = useCarrinho();

  const navigate = useNavigate();
  // Função para finalizar a compra
  const irParaCheckout = () => {
    if (!carrinho.length) {
      alert("Seu carrinho está vazio! Adicione produtos antes de finalizar.");
      return;
    }
    fecharMenu(); // Fecha o menu
    navigate("/checkout");
  };

  const háItensCarrinho = carrinho.length > 0;

  return (
    <LateralContainer>
      <HeaderLateral>
        <TituloLateral>Carrinho de compras</TituloLateral>
        <BotaoFechar onClick={fecharMenu}>X</BotaoFechar>
      </HeaderLateral>
      <ListaItens $isEmpty={!háItensCarrinho}>
        {!háItensCarrinho ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <FaShoppingCart style={{ fontSize: "2.5rem", color: "#ccc" }} />
            <FaSadTear
              style={{
                fontSize: "1.5rem",
                color: "#ccc",
                marginLeft: "0.5rem",
              }}
            />
            <h1
              style={{ fontSize: "1.2rem", color: "#ccc", marginTop: "1rem" }}
            >
              Seu carrinho está vazio
            </h1>
          </div>
        ) : (
          carrinho.map((item) => (
            <ItemCarrinho key={item.id}>
              <ImgProduto src={item.src} />
              <ConteinerDescricaoProduto>
                <NomeProduto>{item.titulo}</NomeProduto>
                <ConteinerQuantidade>
                  <h1>Quantidade:</h1>
                  <div>
                    <BotaoQuantidade
                      onClick={() => diminuirQuantidade(item.id)}
                    >
                      -
                    </BotaoQuantidade>
                    <QuantidadeProduto>{item.quantidade}</QuantidadeProduto>
                    <BotaoQuantidade
                      onClick={() => aumentarQuantidade(item.id)}
                    >
                      +
                    </BotaoQuantidade>
                  </div>
                </ConteinerQuantidade>
                <PrecoProduto>
                  R$ {(item.preco * item.quantidade).toFixed(2)}
                </PrecoProduto>
              </ConteinerDescricaoProduto>
              <IconeLixeira onClick={() => removerItem(item.id)}>
                <FaTrash />
              </IconeLixeira>
            </ItemCarrinho>
          ))
        )}
      </ListaItens>
      <RodapeLateral>
        <ConteinerValorTotal>
          <h1>Total: </h1>
          <p>R$ {totalPreco.toFixed(2)}</p>
        </ConteinerValorTotal>
        <ConteinerBotoes>
          <BotaoCheckout onClick={irParaCheckout}>
            Finalizar Compra
          </BotaoCheckout>
          <BotaoLimparCarrinho onClick={limparCarrinho}>
            Limpar Carrinho
          </BotaoLimparCarrinho>
        </ConteinerBotoes>
      </RodapeLateral>
    </LateralContainer>
  );
};

export default MenuLateralCarrinho;
