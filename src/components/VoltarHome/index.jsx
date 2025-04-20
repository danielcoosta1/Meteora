import { useNavigate } from "react-router-dom"
import { ButtonEstilizado } from "./styles";

const VoltarHome = ({children, ...props}) => {
    const navigate = useNavigate();
    return(
        <ButtonEstilizado onClick={()=>navigate("/")} {...props} >
            {children}
        </ButtonEstilizado>
    )
}

export default VoltarHome