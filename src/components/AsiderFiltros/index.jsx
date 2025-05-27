import {
  AsideEstilizado,
  ItemListaEstilizado,
  ListaEstilizada,
  ListaDeFiltros,
  TituloAside,
  TituloFiltro,
  ItemListaFiltro,
  BotaoFiltro,
} from "./styles";
import { CiFilter } from "react-icons/ci";

import { useProdutos } from "../../hooks/useProdutos";

import { IoMdArrowDropright } from "react-icons/io";

const AsiderFiltros = () => {
  const { setFiltroPreco, filtroPreco, setGeneroSelecionado, generoSelecionado } = useProdutos();

  return (
    <>
      <AsideEstilizado>
        <TituloAside>
          <h2>Filtros</h2>
          <CiFilter size={35} />
        </TituloAside>
        <ListaEstilizada>
          <ItemListaEstilizado>
            <TituloFiltro>
              <IoMdArrowDropright size={20} />
              Preços
            </TituloFiltro>
            <ListaDeFiltros>
              <ItemListaFiltro
                onClick={() => setFiltroPreco("ate100")}
                className={filtroPreco === "ate100" ? "ativo" : ""}
              >
                <BotaoFiltro type="button">Até R$100</BotaoFiltro>
              </ItemListaFiltro>
              <ItemListaFiltro
                onClick={() => setFiltroPreco("100a200")}
                className={filtroPreco === "100a200" ? "ativo" : ""}
              >
                <BotaoFiltro type="button">R$100 a R$200</BotaoFiltro>
              </ItemListaFiltro>
              <ItemListaFiltro
                onClick={() => setFiltroPreco("acima200")}
                className={filtroPreco === "acima200" ? "ativo" : ""}
              >
                <BotaoFiltro type="button">Acima de R$200</BotaoFiltro>
              </ItemListaFiltro>
            </ListaDeFiltros>
          </ItemListaEstilizado>
          <ItemListaEstilizado>
            <TituloFiltro>
            <IoMdArrowDropright size={20} />
            Gêneros
            </TituloFiltro>
            <ListaDeFiltros>
              <ItemListaFiltro
                onClick={() => setGeneroSelecionado("masculino")}
                className={generoSelecionado === "masculino" ? "ativo" : ""}
              >
                <BotaoFiltro type="button">Masculino</BotaoFiltro>
              </ItemListaFiltro>
              <ItemListaFiltro
                onClick={() => setGeneroSelecionado("feminino")}
                className={generoSelecionado === "feminino" ? "ativo" : ""}
              >
                <BotaoFiltro type="button">Feminino</BotaoFiltro>
              </ItemListaFiltro>
              <ItemListaFiltro
                onClick={() => setGeneroSelecionado("unissex")}
                className={generoSelecionado === "unissex" ? "ativo" : ""}
              >
                <BotaoFiltro type="button">Unissex</BotaoFiltro>
              </ItemListaFiltro>
            </ListaDeFiltros>
          </ItemListaEstilizado>
        </ListaEstilizada>
      </AsideEstilizado>
    </>
  );
};

export default AsiderFiltros;
