import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";
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
  const [erro, setErro] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    try {
      await login({ email, senha });
      navigate("/");
    } catch (err) {
      console.error("Erro ao fazer login:", err.message);
      setErro("E-mail ou senha inválidos.");
    }
  };

  return (
    <>
      <BarraDeNavegacao />
      <ContainerPagina>
        <ConteudoCentralizado>
          <Titulo>Entrar na sua conta</Titulo>
          {erro && <p style={{ color: "red", marginBottom: "1rem" }}>{erro}</p>}
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
