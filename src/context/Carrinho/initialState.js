// Função para obter o carrinho do localStorage
const getCarrinhoFromLocalStorage = () => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []; // Retorna o carrinho salvo ou um array vazio
  };
  
  // Estado inicial do contexto
  export const initialState = {
    carrinho: getCarrinhoFromLocalStorage(), // Carrega o carrinho salvo no localStorage
    menuAberto: false,
  };