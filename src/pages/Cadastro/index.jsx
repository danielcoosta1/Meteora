// src/pages/Cadastro/Cadastro.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const Cadastro = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erro, setErro] = useState("");
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

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

      setCadastroSucesso(true); //// Mostrar mensagem ao invés de redirecionar
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
          {!cadastroSucesso ? (
            <>
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
                Já tem conta? <Link to="/login">Entre aqui</Link>
              </LinkCadastro>
            </>
          ) : (
            <>
              <Titulo>Cadastro realizado com sucesso!</Titulo>
              <p style={{ marginBottom: "2rem" }}>
                Você já está logado. Clique abaixo para voltar à página inicial.
              </p>
              <BotaoSubmit onClick={() => navigate("/")}>
                Ir para Home
              </BotaoSubmit>
            </>
          )}
        </ConteudoCentralizado>
      </ContainerPagina>
    </>
  );
};

export default Cadastro;
