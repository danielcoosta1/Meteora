
import { useContext } from "react";

import { ProdutosContext } from "../context/produtos/ProdutosContext";


export const useProdutos = () => useContext(ProdutosContext);


