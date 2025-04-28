import { Container, Titulo, Formulario, InputEmail, Botao } from "./styles";

const Novidades = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("E-mail cadastrado com sucesso!");
    e.target.reset();
  };

  return (
    <Container>
     
        <Titulo>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </Titulo>
        <Formulario onSubmit={handleSubmit}>
          <InputEmail type="email" placeholder="Digite seu e-mail" />
          <Botao>Enviar</Botao>
        </Formulario>
     
    </Container>
  );
};

export default Novidades;
