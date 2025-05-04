// src/pages/Cadastro/Cadastro.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import {
  ContainerPagina,
  ConteudoCentralizado,
  Titulo,
  Formulario,
  CampoInput,
  BotaoSubmit,
  LinkCadastro,
} from "./styles";
import { useAuth } from "../../hooks/useAuth";

const Cadastro = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    try {
      const resposta = await fetch("http://localhost:3001/usuarios/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.erro || "Erro ao cadastrar");
      }

      // Login automático com os dados retornados
      login(dados);
      navigate("/");
    } catch (err) {
      console.error("Erro no cadastro:", err.message);
      setErro(err.message);
    }
  };

  return (
    <>
      <BarraDeNavegacao />
      <ContainerPagina>
        <ConteudoCentralizado>
          <Titulo>Cadastre-se</Titulo>
          <Formulario onSubmit={handleSubmit}>
            <CampoInput
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <CampoInput
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <CampoInput
              type="password"
              placeholder="Crie uma senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <BotaoSubmit type="submit">Cadastrar</BotaoSubmit>
          </Formulario>
          {erro && <p style={{ color: "red" }}>{erro}</p>}
          <LinkCadastro>
            Já tem conta? <a href="/login">Entre aqui</a>
          </LinkCadastro>
        </ConteudoCentralizado>
      </ContainerPagina>
    </>
  );
};

export default Cadastro;
