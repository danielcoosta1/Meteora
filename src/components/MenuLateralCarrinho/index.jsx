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
} from "./styles";

import { FaTrash } from "react-icons/fa";

const MenuLateralCarrinho = ({ carrinho, fecharMenu, setCarrinho }) => {
  const navigate = useNavigate();

  // Calcula o total do carrinho
  const total = carrinho.reduce(
    (acumulador, item) => acumulador + item.preco * item.quantidade,
    0
  );

  // Função para finalizar a compra
  const irParaCheckout = () => {
    fecharMenu(); // Fecha o menu
    navigate("/checkout", { state: { carrinho } });
  };

  const aumentarQuantidade = (id) => {
    const atualizado = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    setCarrinho(atualizado);
  };

  const diminuirQuantidade = (id) => {
    const atualizado = carrinho
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantidade: item.quantidade > 1 ? item.quantidade - 1 : 1,
            }
          : item
      )
      .filter((item) => item.quantidade > 0);
    setCarrinho(atualizado);
  };

  const removerItem = (id) => {
    const atualizado = carrinho.filter((item) => item.id !== id);
    setCarrinho(atualizado);
  };

  return (
    <LateralContainer>
      <HeaderLateral>
        <TituloLateral>Carrinho de compras</TituloLateral>
        <BotaoFechar onClick={fecharMenu}>X</BotaoFechar>
      </HeaderLateral>
      <ListaItens>
        {carrinho.map((item) => (
          <ItemCarrinho key={item.id}>
            <ImgProduto src={item.src} />
            <ConteinerDescricaoProduto>
              <NomeProduto>{item.titulo}</NomeProduto>
              <ConteinerQuantidade>
                <h1>Quantidade:</h1>
                <div>
                  <BotaoQuantidade onClick={() => diminuirQuantidade(item.id)}>
                    -
                  </BotaoQuantidade>
                  <QuantidadeProduto>{item.quantidade}</QuantidadeProduto>
                  <BotaoQuantidade onClick={() => aumentarQuantidade(item.id)}>
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
        ))}
      </ListaItens>
      <RodapeLateral>
        <div>
          <h1>Total: </h1>
          <p>R$ {total.toFixed(2)}</p>
        </div>
        <BotaoCheckout onClick={irParaCheckout}>Finalizar Compra</BotaoCheckout>
      </RodapeLateral>
    </LateralContainer>
  );
};

export default MenuLateralCarrinho;
