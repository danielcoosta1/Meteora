import express from "express";
import cors from "cors";

import produtosRoutes from "./routes/produtos.js";
/* global process */

const app = express();

const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors()); // Permite requisições de outros domínios
app.use(express.json()); // Interpreta requisições com JSON no corpo

app.use('/produtos', produtosRoutes);

// Rota de teste para verificar se o servidor está funcionando
app.get("/", (req, res) => {
  res.send("Backend Meteora rodando!");
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
