import { useNavigate } from "react-router-dom"
import { ButtonEstilizado } from "./styles";

const VoltarHome = () => {
    const navigate = useNavigate();
    return(
        <ButtonEstilizado onClick={()=>navigate("/")}>
            Voltar
        </ButtonEstilizado>
    )
}

export default VoltarHome