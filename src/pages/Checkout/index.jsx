// src/pages/Checkout.jsx

import { FaTrash } from "react-icons/fa";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import imgBannerCarrinho from "/assets/images/banner-carrinho.png";
import { BannerCheckout, ConteinerPrincipal } from "./styles";

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
          <p>Seu carrinho está vazio 😕</p>
        ) : (
          <p>Você tem {carrinho.length} item(ns) no carrinho!</p>
        )}
      </ConteinerPrincipal>
    </>
  );
};

export default Checkout;
