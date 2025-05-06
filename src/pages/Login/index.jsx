import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
import { toastErro, toastSucesso } from "../../utils/toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erro, setErro] = useState("");

  const [carregando, setCarregando] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      await login({ email, senha });
      toastSucesso("Login efetuado com sucesso");
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Erro ao fazer login:", err.message);
      setErro("E-mail ou senha inválidos.");
      toastErro("E-mail ou senha inválidos.");
    } finally {
      setCarregando(false);
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
            <BotaoSubmit type="submit" disabled={carregando}>
              {carregando ? <>🔄 Entrando...</> : "Entrar"}
            </BotaoSubmit>
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
