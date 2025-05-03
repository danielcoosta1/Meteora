// src/pages/Login/Login.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
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

const Login = () => {
    
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de login será feita futuramente
    console.log("Login:", { email, senha });
  };

  return (
    <>
      <BarraDeNavegacao />
      <ContainerPagina>
        <ConteudoCentralizado>
          <Titulo>Entrar na sua conta</Titulo>
          <Formulario onSubmit={handleSubmit}>
            <CampoInput
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <CampoInput
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <BotaoSubmit type="submit">Entrar</BotaoSubmit>
          </Formulario>
          <LinkCadastro>
            Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
          </LinkCadastro>
        </ConteudoCentralizado>
      </ContainerPagina>
    </>
  );
};

export default Login;
