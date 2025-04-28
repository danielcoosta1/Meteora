import { GridProdutos, SecaoProdutos } from "./styles";

import { useProdutos } from "../../hooks/useProdutos";

import {  FaFire } from "react-icons/fa";

import produtosBombando from "../../mocks/produtosBombando.json";

import ModoAmpliar from "../ModoAmpliar";
import TituloSecao from "../TituloDefaultSecao";
import ProdutoCard from "../ProdutoCard";

const ProdutosBombando = () => {
  const { produtoAmpliado } = useProdutos(); // Importa o hook de carrinho

  return (
    <SecaoProdutos>
      <TituloSecao texto="Produtos que estão bombando" Icone={FaFire} />
      <GridProdutos>
        {produtosBombando.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </GridProdutos>
      {produtoAmpliado && <ModoAmpliar />}
    </SecaoProdutos>
  );
};

export default ProdutosBombando;
