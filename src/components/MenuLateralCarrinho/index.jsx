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
} from "./styles";

import { FaTrash } from "react-icons/fa";

const MenuLateralCarrinho = ({ carrinho, fecharMenu }) => {
  const navigate = useNavigate();

  // Calcula o total do carrinho
  const total = carrinho.reduce(
    (acumulador, item) => acumulador + item.preco * item.quantidade,
    0
  );

  // Função para finalizar a compra
  const irParaCheckout = () => {
    fecharMenu(); // Fecha o menu
    navigate("/checkout"); // Navega para a página de checkout
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
                <QuantidadeProduto>{item.quantidade}x</QuantidadeProduto>
              </ConteinerQuantidade>
              <PrecoProduto>
                R$ {(item.preco * item.quantidade).toFixed(2)}
              </PrecoProduto>
            </ConteinerDescricaoProduto>
            <IconeLixeira>
                <FaTrash />
            </IconeLixeira>
          </ItemCarrinho>
        ))}
      </ListaItens>
      <RodapeLateral>
        <p>Total: R$ {total.toFixed(2)}</p>
        <BotaoCheckout onClick={irParaCheckout}>Finalizar Compra</BotaoCheckout>
      </RodapeLateral>
    </LateralContainer>
  );
};

export default MenuLateralCarrinho;
