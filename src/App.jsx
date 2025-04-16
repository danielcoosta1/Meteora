import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Checkout from "./pages/Checkout";
import Error from "./pages/Error404";
import Lojas from "./pages/Lojas";
import Novidades from "./pages/Novidades";
import Promocoes from "./pages/Promocoes";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/novidades" element={<Novidades />} />
        <Route path="/lojas" element={<Lojas />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
