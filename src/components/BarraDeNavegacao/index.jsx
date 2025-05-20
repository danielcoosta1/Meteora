// BarraDeNavegacao.jsx
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
  ContainerAuth,
  ContainerLogado,
  UsuarioLogado,
  ButtonLogout,
  BotaoHamburguer,
  ContainerBuscaMobile,
  CampoBuscaDesktop,
} from "./styles";

import { useCarrinho } from "../../hooks/useCarrinho";
import logoMeteora from "/assets/images/logo-meteora.png";
import { useFavoritos } from "../../hooks/useFavoritos";
import iconeCarrinho from "/assets/cart.svg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useProdutos } from "../../hooks/useProdutos";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

const BarraDeNavegacao = () => {
  const { carrinho, abrirMenu } = useCarrinho();
  const { termoBusca, setTermoBusca } = useProdutos();
  const { favoritos } = useFavoritos();
  const { usuario, logout } = useAuth();
  const [menuAberto, setMenuAberto] = useState(false);

  const location = useLocation();
  const rotaAtual = location.pathname;

  const links = [
    { name: "Home", path: "/" },
    { name: "Novidades", path: "/novidades" },
    { name: "Promoções", path: "/promocoes" },
    { name: "Produtos", path: "/produtos" },
  ];

  const exibirCampoBusca =
    rotaAtual === "/produtos" || rotaAtual === "/favoritos";

  return (
    <>
      <NavEstilizada>
        <ConteinerEsquerdaEstilizado>
          <NavLink to="/">
            <h1>
              <ImgEstilizada src={logoMeteora} alt="Logo do Meteora" />
            </h1>
          </NavLink>

          <ListaEstilizada $menuAberto={menuAberto}>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "ativo" : "")}
                  onClick={() => setMenuAberto(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ListaEstilizada>
        </ConteinerEsquerdaEstilizado>

        <ConteinerDireitoEstilizado>
          {exibirCampoBusca && (
            <CampoBuscaDesktop>
              <CampoFormSearch onSubmit={(e) => e.preventDefault()}>
                <InputEstilizado
                  type="search"
                  placeholder="Digite o produto"
                  value={termoBusca}
                  onChange={(e) => setTermoBusca(e.target.value)}
                  aria-label="Buscar produto"
                />
                <Button type="submit">Buscar</Button>
              </CampoFormSearch>
            </CampoBuscaDesktop>
          )}

          <ContainerIcones>
            <IconeCarrinho
              onClick={abrirMenu}
              aria-label="Abrir carrinho de compras"
              title="Abrir carrinho de compras"
            >
              <ImgEstilizada src={iconeCarrinho} alt="Carrinho" />
              <span>
                {carrinho.reduce((acc, item) => acc + item.quantidade, 0)}
              </span>
            </IconeCarrinho>

            <NavLink to="/favoritos" aria-label="Favoritos" title="Favoritos">
              {({ isActive }) => (
                <IconeFavoritos className={isActive ? "ativo" : ""}>
                  {isActive ? <FaHeart /> : <FaRegHeart />}
                  <span>{favoritos.length}</span>
                </IconeFavoritos>
              )}
            </NavLink>

            {usuario ? (
              <ContainerLogado>
                <UsuarioLogado>Olá, {usuario.nome}!</UsuarioLogado>
                <ButtonLogout onClick={logout}>Sair</ButtonLogout>
              </ContainerLogado>
            ) : (
              <ContainerAuth>
                <NavLink to="/login">
                  <button>Login</button>
                </NavLink>
                <NavLink to="/cadastro">
                  <button>Cadastro</button>
                </NavLink>
              </ContainerAuth>
            )}
          </ContainerIcones>

          <BotaoHamburguer
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
          >
            <div />
            <div />
            <div />
          </BotaoHamburguer>
        </ConteinerDireitoEstilizado>
      </NavEstilizada>

      {exibirCampoBusca && (
        <ContainerBuscaMobile $mostrar={true}>
          <CampoFormSearch onSubmit={(e) => e.preventDefault()}>
            <InputEstilizado
              type="search"
              placeholder="Digite o produto"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              aria-label="Buscar produto"
            />
            <Button type="submit">Buscar</Button>
          </CampoFormSearch>
        </ContainerBuscaMobile>
      )}
    </>
  );
};

export default BarraDeNavegacao;
