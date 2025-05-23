import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ContainerPagina,
  ConteudoCentralizado,
  Titulo,
  Formulario,
  CampoInput,
  BotaoSubmit,
  LinkCadastro,
  BotaoAlternativo,
  TextoSucesso,
  ConteinerLinks,
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
      const resposta = await fetch(
        `${import.meta.env.VITE_API_URL}/usuarios/cadastro`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, email, senha }),
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.erro || "Erro ao cadastrar");
      }

      setCadastroSucesso(true); // Mostrar mensagem ao invés de redirecionar
    } catch (err) {
      console.error("Erro no cadastro:", err.message);
      setErro(err.message);
    }
  };

  return (
    <>
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
              <TextoSucesso>
                Você foi cadastrado com sucesso! Agora, você pode acessar a
                plataforma.
              </TextoSucesso>
              <ConteinerLinks>
                <BotaoAlternativo onClick={() => navigate("/")}>
                  Ir para a Home
                </BotaoAlternativo>
                <LinkCadastro>
                  <Link to="/login">
                    Ou clique aqui para fazer login e acessar sua conta.
                  </Link>
                </LinkCadastro>
              </ConteinerLinks>
            </>
          )}
        </ConteudoCentralizado>
      </ContainerPagina>
    </>
  );
};

export default Cadastro;
