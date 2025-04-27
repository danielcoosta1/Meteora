import {
  AsideEstilizado,
  ItemListaEstilizado,
  ListaEstilizada,
  TituloAside,
} from "./styles";

const AsiderFiltros = () => {
  return (
    <>
      <AsideEstilizado>
        <TituloAside>Filtros</TituloAside>
        <ListaEstilizada>
          <ItemListaEstilizado>
            <h2>Preços</h2>
            <ul>
              <li>Até R$100</li>
              <li>R$100 a R$200</li>
              <li>Acima de R$200</li>
            </ul>
          </ItemListaEstilizado>
        </ListaEstilizada>
      </AsideEstilizado>
    </>
  );
};

export default AsiderFiltros;
