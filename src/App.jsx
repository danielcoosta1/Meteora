import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";

import Checkout from "./pages/Checkout";
import Error from "./pages/Error404";

import Novidades from "./pages/Novidades";
import Promocoes from "./pages/Promocoes";

import { CarrinhoProvider } from "./context/carrinho/CarrinhoProvider";
import { FavoritosProvider } from "./context/favoritos/FavoritosProvider";
import { ProdutoProvider } from "./context/produtos/ProdutosProvider";
import { AuthProvider } from "./context/auth/AuthProvider";

import Favoritos from "./pages/Favoritos";

import Produtos from "./pages/Produtos";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProdutoProvider>
          <FavoritosProvider>
            <CarrinhoProvider>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
              />
              <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/promocoes" element={<Promocoes />} />
                <Route path="/novidades" element={<Novidades />} />
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </CarrinhoProvider>
          </FavoritosProvider>
        </ProdutoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
