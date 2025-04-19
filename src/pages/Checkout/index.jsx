// src/pages/Checkout.jsx

import { FaTrash } from "react-icons/fa";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import imgBannerCarrinho from "/assets/images/banner-carrinho.png";
import { BannerCheckout } from "./styles";

const Checkout = ({ carrinho, setCarrinho }) => {
  const carrinhoVazio = carrinho.length === 0;


  return (
    <>
      <BarraDeNavegacao />
      <BannerCheckout>
        <img src={imgBannerCarrinho} />
      </BannerCheckout>
      
    </>
  );
};

export default Checkout;
