// src/components/BotaoLimpar/index.jsx
import { ContainerBotaoLimpar } from "./styles";

const BotaoLimpar = ({ onClick, children, Icone }) => {
  return (
    <ContainerBotaoLimpar onClick={onClick}>
      {Icone && (
        <Icone size={20} style={{ marginRight: "8px", color: "#9353ff" }} />
      )}
      {children}
    </ContainerBotaoLimpar>
  );
};

export default BotaoLimpar;
