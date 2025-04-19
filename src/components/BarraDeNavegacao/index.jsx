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
import { useLocation } from "react-router-dom";

const BarraDeNavegacao = ({ carrinho, abrirMenu }) => {
  const links = [
    { name: "Nossas Lojas", path: "/lojas" },
    { name: "Novidades", path: "/novidades" },
    { name: "Promoções", path: "/promocoes" },
  ];

  //Verificação para renderizar o ícone do carrinho - Não aparece no checkout, apenas no home;
  const location = useLocation();
  const estaNoCheckOut = location.pathname === "/checkout";

  return (
    <NavEstilizada>
      <ConteinerEsquerdaEstilizado>
        <NavLink to="/">
          <h1>
            <ImgEstilizada src={logoMeteora} alt="Logo do Meteora" />
          </h1>
        </NavLink>
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
        {!estaNoCheckOut && (
          <CampoCart onClick={abrirMenu}>
            <ImgEstilizada
              src={iconeCarrinho}
              alt="Abrir carrinho de compras"
            />
            <span>
              {carrinho.reduce((acc, item) => acc + item.quantidade, 0)}
            </span>
          </CampoCart>
        )}
      </ConteinerDireitoEstilizado>
    </NavEstilizada>
  );
};

export default BarraDeNavegacao;
