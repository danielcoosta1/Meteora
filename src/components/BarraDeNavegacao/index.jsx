import {
  CampoCart,
  CampoSearch,
  ConteinerDireitoEstilizado,
  ConteinerEsquerdaEstilizado,
  ImgEstilizada,
  InputEstilizado,
  ListaEstilizada,
  NavEstilizada,
} from "./styles";
import logoMeteora from "/assets/images/logo-meteora.png";
import iconeCarrinho from "/assets/cart.svg";

const BarraDeNavegacao = () => {
  return (
    <NavEstilizada>
      <ConteinerEsquerdaEstilizado>
        <h1>
          <ImgEstilizada src={logoMeteora} alt="Logo do Meteora" />
        </h1>
        <ListaEstilizada>
          <li>
            <a href="#">Nossas lojas</a>
          </li>
          <li>
            <a href="#">Novidades</a>
          </li>
          <li>
            <a href="#">Promoções</a>
          </li>
        </ListaEstilizada>
      </ConteinerEsquerdaEstilizado>
      <ConteinerDireitoEstilizado>
        <CampoSearch>
          <InputEstilizado typeof="search" placeholder="Digite o produto" />
          <button>Buscar</button>
        </CampoSearch>
        <CampoCart>
          <ImgEstilizada
            src={iconeCarrinho}
            alt="Ícone do carrinho de compras"
          />
          <p>4</p>
        </CampoCart>
      </ConteinerDireitoEstilizado>
    </NavEstilizada>
  );
};

export default BarraDeNavegacao;
