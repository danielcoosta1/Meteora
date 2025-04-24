import {
  Button,
  CampoFormSearch,
  ContainerIcones,
  ConteinerDireitoEstilizado,
  ConteinerEsquerdaEstilizado,
  ImgEstilizada,
  InputEstilizado,
  ListaEstilizada,
  NavEstilizada,
  IconeCarrinho,
  IconeFavoritos,
} from "./styles";

import { useCarrinho } from "../../hooks/useCarrinho";

import logoMeteora from "/assets/images/logo-meteora.png";

import { useFavoritos } from "../../hooks/useFavoritos";

import iconeCarrinho from "/assets/cart.svg";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BarraDeNavegacao = ({ abrirMenu }) => {
  const { carrinho, termoBusca, setTermoBusca } = useCarrinho();
  const { favoritos } = useFavoritos();

  const links = [
    { name: "Home", path: "/" },
    { name: "Carrinho", path: "/checkout" },
    { name: "Novidades", path: "/novidades" },
    { name: "Promoções", path: "/promocoes" },
    { name: "Favoritos", path: "/favoritos" },
  ];

  //Verificação para renderizar o ícone do carrinho - Não aparece no checkout, apenas no home;
  const location = useLocation();
  const estaNoHome = location.pathname === "/";

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
          <InputEstilizado
            type="search"
            placeholder="Digite o produto"
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
          <Button type="submit">Buscar</Button>
        </CampoFormSearch>
        {estaNoHome && (
          <ContainerIcones>
            <IconeCarrinho onClick={abrirMenu}>
              <ImgEstilizada
                src={iconeCarrinho}
                alt="Abrir carrinho de compras"
              />
              <span>
                {carrinho.reduce((acc, item) => acc + item.quantidade, 0)}
              </span>
            </IconeCarrinho>
            <IconeFavoritos>
              <FaRegHeart />
              <span>{favoritos.length}</span>
            </IconeFavoritos>
          </ContainerIcones>
        )}
      </ConteinerDireitoEstilizado>
    </NavEstilizada>
  );
};

export default BarraDeNavegacao;
