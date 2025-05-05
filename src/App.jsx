import { BrowserRouter as Router } from "react-router-dom";

import { CarrinhoProvider } from "./context/carrinho/CarrinhoProvider";
import { FavoritosProvider } from "./context/favoritos/FavoritosProvider";
import { ProdutoProvider } from "./context/produtos/ProdutosProvider";
import { AuthProvider } from "./context/auth/AuthProvider";
import AppContent from "./components/AppContent";


function App() {
  return (
    <Router>
      <AuthProvider>
        <ProdutoProvider>
          <FavoritosProvider>
            <CarrinhoProvider>
              <AppContent/>
            </CarrinhoProvider>
          </FavoritosProvider>
        </ProdutoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
