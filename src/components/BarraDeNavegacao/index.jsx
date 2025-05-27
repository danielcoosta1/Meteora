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
  BotaoAuth,
  CampoBuscaDesktop,
  ContainerBuscaMobile,
  ContainerMenuMobile,
  IconLogout, // ✅ MODIFICADO
} from "./styles";

import { useEffect, useRef } from "react";

import { useCarrinho } from "../../hooks/useCarrinho";
import logoMeteora from "/assets/images/logo-meteora.png";
import { useFavoritos } from "../../hooks/useFavoritos";
import iconeCarrinho from "/assets/cart.svg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useProdutos } from "../../hooks/useProdutos";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

import { useNavbar } from "../../hooks/useNavbar";


const BarraDeNavegacao = () => {
  const menuRef = useRef(null);
  const botaoHamburguerRef = useRef(null);

  const { navRef, altura } = useNavbar();
  const { carrinho, abrirMenu } = useCarrinho();
  const { termoBusca, setTermoBusca } = useProdutos();
  const { favoritos } = useFavoritos();
  const { usuario, logout } = useAuth();

  const [menuAberto, setMenuAberto] = useState(false);

  const location = useLocation();
  const rotaAtual = location.pathname;

  useEffect(() => {
    function handleClickFora(event) {
      // Verifica se o menu está aberto E o clique foi fora do menu E do botão hamburguer
      if (
        menuAberto &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        botaoHamburguerRef.current &&
        !botaoHamburguerRef.current.contains(event.target)
      ) {
        setMenuAberto(false);
      }
    }

    document.addEventListener("mousedown", handleClickFora);
    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, [menuAberto]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Novidades", path: "/novidades" },
    { name: "Promoções", path: "/promocoes" },
    { name: "Produtos", path: "/produtos" },
  ];

  const exibirCampoBusca =
    rotaAtual === "/produtos";

  return (
    <>
      <NavEstilizada ref={navRef}>
        <ConteinerEsquerdaEstilizado $campoBusca={exibirCampoBusca}>
          <BotaoHamburguer
            ref={botaoHamburguerRef}
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
            $ativo={menuAberto}
          >
            <div />
            <div />
            <div />
          </BotaoHamburguer>
          <NavLink to="/">
            <h1>
              <ImgEstilizada src={logoMeteora} alt="Logo do Meteora" />
            </h1>
          </NavLink>

          <ListaEstilizada
            ref={menuRef}
            $menuAberto={menuAberto}
            $alturaNav={altura}
          >
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

            {/* ✅ MODIFICADO: Colocado os botões de auth no final do menu mobile */}
            <ContainerMenuMobile>
              {usuario ? (
                <ContainerLogado>
                  <UsuarioLogado>Olá, {usuario.nome}!</UsuarioLogado>
                  <ButtonLogout onClick={logout}>
                    <IconLogout className="logout-icon" />
                    Sair
                  </ButtonLogout>
                </ContainerLogado>
              ) : (
                <ContainerAuth>
                  <NavLink to="/login">
                    <BotaoAuth>Login</BotaoAuth>
                  </NavLink>
                  <NavLink to="/cadastro">
                    <BotaoAuth>Cadastro</BotaoAuth>
                  </NavLink>
                </ContainerAuth>
              )}
            </ContainerMenuMobile>
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

          {usuario ? (
            <ContainerLogado className="versao-desktop">
              <UsuarioLogado>Olá, {usuario.nome}!</UsuarioLogado>
              <ButtonLogout onClick={logout}>
                <IconLogout className="logout-icon" />
                Sair
              </ButtonLogout>
            </ContainerLogado>
          ) : (
            <ContainerAuth className="versao-desktop">
              <NavLink to="/login">
                <BotaoAuth>Login</BotaoAuth>
              </NavLink>
              <NavLink to="/cadastro">
                <BotaoAuth>Cadastro</BotaoAuth>
              </NavLink>
            </ContainerAuth>
          )}
          <ContainerIcones>
            <IconeCarrinho
              onClick={abrirMenu}
              aria-label="Abrir carrinho de compras"
              title="Abrir carrinho de compras"
            >
              <img src={iconeCarrinho} alt="Carrinho" />
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
          </ContainerIcones>
        </ConteinerDireitoEstilizado>
      </NavEstilizada>

      {exibirCampoBusca && (
        <ContainerBuscaMobile $mostrar={true} $alturaNav={altura}>
          <CampoFormSearch
            onSubmit={(e) => e.preventDefault()}
            className="mobile"
          >
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
