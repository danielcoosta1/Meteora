import { useNavigate } from "react-router-dom"
import { ButtonEstilizado } from "./styles";

const VoltarHome = ({children}) => {
    const navigate = useNavigate();
    return(
        <ButtonEstilizado onClick={()=>navigate("/")}>
            {children}
        </ButtonEstilizado>
    )
}

export default VoltarHome