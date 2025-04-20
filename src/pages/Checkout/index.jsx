// src/pages/Checkout.jsx

import { FaTrash } from "react-icons/fa";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import imgBannerCarrinho from "/assets/images/banner-carrinho.png";
import {
  BannerCheckout,
  BotaoFinalizarCompra,
  BotaoQuantidade,
  Botoes,
  ConteinerDescricaoProduto,
  ConteinerPrincipalCompras,
  ConteinerPrincipalVazio,
  ConteinerQuantidade,
  ConteinerVazio,
  DescricaoSemProduto,
  DetalhesCompras,
  DetalhesPagamento,
  IconeLixeira,
  ImgProduto,
  ItemLista,
  ListaItens,
  NomeProduto,
  PrecoProduto,
  ProdutoPreco,
  QuantidadeProduto,
  TituloCheckout,
  TotalPreco,
} from "./styles";
import VoltarHome from "../../components/VoltarHome";

const Checkout = ({ carrinho, setCarrinho }) => {
  const carrinhoVazio = carrinho.length === 0;
  const totalPreco = carrinho.reduce(
    (acumulador, item) => acumulador + item.preco * item.quantidade,
    0
  );

  const totalQuantidade = carrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0
  );

  const incrementarQtde = (id) => {
    const atualizado = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    setCarrinho(atualizado);
  };

  const decrementarQtde = (id) => {
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

  const apagarItem = (id) => {
    const atualizado = carrinho.filter((item) => item.id !== id);
    setCarrinho(atualizado);
  };


  const finalizarCompra = () => {
    alert("Compra finalizada com sucesso! 🎉");
    setCarrinho([]); // limpa o carrinho
  };
  

  return (
    <>
      <BarraDeNavegacao />
      <BannerCheckout>
        <img src={imgBannerCarrinho} />
      </BannerCheckout>

      {carrinhoVazio ? (
        <ConteinerPrincipalVazio>
          <ConteinerVazio>
            <DescricaoSemProduto>
              Seu carrinho está vazio 😕
            </DescricaoSemProduto>
            <VoltarHome>Continuar compras</VoltarHome>
          </ConteinerVazio>
        </ConteinerPrincipalVazio>
      ) : (
        <>
          <TituloCheckout>Carrinho de Compras</TituloCheckout>
          <ConteinerPrincipalCompras>
            <DetalhesCompras>
              <h1>Detalhes Compras</h1>
              <ListaItens>
                {carrinho.map((item) => (
                  <ItemLista key={item.id}>
                    <ImgProduto src={item.src} />
                    <ConteinerDescricaoProduto>
                      <NomeProduto>{item.titulo}</NomeProduto>
                      <span>{item.descricao}</span>
                    </ConteinerDescricaoProduto>
                    <PrecoProduto>
                      R$ {(item.preco * item.quantidade).toFixed(2)}
                    </PrecoProduto>
                    <ConteinerQuantidade>
                      <h1>Quantidade:</h1>
                      <div>
                        <BotaoQuantidade
                          onClick={() => decrementarQtde(item.id)}
                        >
                          -
                        </BotaoQuantidade>
                        <QuantidadeProduto>{item.quantidade}</QuantidadeProduto>
                        <BotaoQuantidade
                          onClick={() => incrementarQtde(item.id)}
                        >
                          +
                        </BotaoQuantidade>
                      </div>
                    </ConteinerQuantidade>
                    <IconeLixeira onClick={() => apagarItem(item.id)}>
                      <FaTrash />
                    </IconeLixeira>
                  </ItemLista>
                ))}
              </ListaItens>
            </DetalhesCompras>
            <DetalhesPagamento>
              <h1>Sumário</h1>
              <ProdutoPreco>
                <p>0{totalQuantidade} Produtos</p>
                <p>R$ {totalPreco.toFixed(2)}</p>
              </ProdutoPreco>
              <TotalPreco>
                <p>Total:</p>
                <span>R$ {totalPreco.toFixed(2)}</span>
              </TotalPreco>
              <Botoes>
                <VoltarHome $width="12rem" > Continuar Comprando</VoltarHome>
                <BotaoFinalizarCompra onClick={finalizarCompra}>Finalizar Compra</BotaoFinalizarCompra>
              </Botoes>
            </DetalhesPagamento>
          </ConteinerPrincipalCompras>
        </>
      )}
    </>
  );
};

export default Checkout;
