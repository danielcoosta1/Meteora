import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Checkout from "./pages/Checkout";
import Error from "./pages/Error404";

import Novidades from "./pages/Novidades";
import Promocoes from "./pages/Promocoes";

import { CarrinhoProvider } from "./context/carrinho/CarrinhoProvider";
import { FavoritosProvider } from "./context/favoritos/FavoritosProvider";
import Favoritos from "./pages/Favoritos";

import Produtos from "./pages/Produto";

function App() {
  return (
    <Router>
      <FavoritosProvider>
        <CarrinhoProvider>
          <Routes>
            <Route path="/produtos" element={<Produtos/>} />
            <Route path="/promocoes" element={<Promocoes />} />
            <Route path="/novidades" element={<Novidades />} />
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </CarrinhoProvider>
      </FavoritosProvider>
    </Router>
  );
}

export default App;
