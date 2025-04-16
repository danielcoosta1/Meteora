import {
  Button,
  CampoCart,
  CampoFormSearch,
  ConteinerDireitoEstilizado,
  ConteinerEsquerdaEstilizado,
  ImgEstilizada,
  InputEstilizado,
  ListaEstilizada,
  NavEstilizada,
} from "./styles";
import logoMeteora from "/assets/images/logo-meteora.png";
import iconeCarrinho from "/assets/cart.svg";
import { NavLink } from "react-router-dom";

const BarraDeNavegacao = () => {
  const links = [
    { name: "Nossas Lojas", path: "/lojas" },
    { name: "Novidades", path: "/novidades" },
    { name: "Promoções", path: "/promocoes" },
  ];

  return (
    <NavEstilizada>
      <ConteinerEsquerdaEstilizado>
        <a href="#">
          <h1>
            <ImgEstilizada src={logoMeteora} alt="Logo do Meteora" />
          </h1>
        </a>
        <ListaEstilizada>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "ativo" : "")}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ListaEstilizada>
      </ConteinerEsquerdaEstilizado>
      <ConteinerDireitoEstilizado>
        <CampoFormSearch role="search">
          <InputEstilizado type="search" placeholder="Digite o produto" />
          <Button type="submit">Buscar</Button>
        </CampoFormSearch>
        <CampoCart onClick={() => console.log("Abrir o carrinho de compras")}>
          <ImgEstilizada src={iconeCarrinho} alt="Abrir carrinho de compras" />
          <span>4</span>
        </CampoCart>
      </ConteinerDireitoEstilizado>
    </NavEstilizada>
  );
};

export default BarraDeNavegacao;
