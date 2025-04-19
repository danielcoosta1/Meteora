// src/pages/Checkout.jsx

import { FaTrash } from "react-icons/fa";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import imgBannerCarrinho from "/assets/images/banner-carrinho.png";
import {
  BannerCheckout,
  ConteinerPrincipal,
  ConteinerVazio,
  DescricaoSemProduto,
} from "./styles";
import VoltarHome from "../../components/VoltarHome";

const Checkout = ({ carrinho, setCarrinho }) => {
  const carrinhoVazio = carrinho.length === 0;

  return (
    <>
      <BarraDeNavegacao />
      <BannerCheckout>
        <img src={imgBannerCarrinho} />
      </BannerCheckout>

      <ConteinerPrincipal>
        {carrinhoVazio ? (
          <ConteinerVazio>
            <DescricaoSemProduto>
              Seu carrinho está vazio 😕
            </DescricaoSemProduto>
           <VoltarHome>Continuar compras</VoltarHome>
          </ConteinerVazio>
        ) : (
          <p>Você tem {carrinho.length} item(ns) no carrinho!</p>
        )}
      </ConteinerPrincipal>
    </>
  );
};

export default Checkout;
