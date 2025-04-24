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
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { useLocation } from "react-router-dom";


const BarraDeNavegacao = () => {
  const { carrinho, termoBusca, setTermoBusca, abrirMenu } = useCarrinho();
  const { favoritos } = useFavoritos();
  
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Novidades", path: "/novidades" },
    { name: "Promoções", path: "/promocoes" },
    { name: "Produtos", path: "/produtos/:id" }
 
  ];

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
        <ContainerIcones>
          <IconeCarrinho onClick={abrirMenu} $display={location.pathname === "/" || location.pathname === "/favoritos"}>
            <ImgEstilizada
              src={iconeCarrinho}
              alt="Abrir carrinho de compras"
            />
            <span>
              {carrinho.reduce((acc, item) => acc + item.quantidade, 0)}
            </span>
          </IconeCarrinho>
          <NavLink to="/favoritos">
            {({ isActive }) => (
              <IconeFavoritos className={isActive ? "ativo" : ""}>
                {isActive ? <FaHeart /> : <FaRegHeart />}
                <span>{favoritos.length}</span>
              </IconeFavoritos>
            )}
          </NavLink>
        </ContainerIcones>
      </ConteinerDireitoEstilizado>
    </NavEstilizada>
  );
};

export default BarraDeNavegacao;
