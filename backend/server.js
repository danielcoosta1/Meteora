import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import produtosRoutes from "./routes/produtos.js";
import carrinhoRoutes from "./routes/carrinho.js"
/* global process */

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Verifica a conexão com o banco de dados
prisma.$connect()
  .then(() => console.log('Conexão com o banco de dados estabelecida.'))
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
    process.exit(1); // Encerra o servidor em caso de falha na conexão com o banco de dados
  });

// Roteamento
app.use('/produtos', produtosRoutes);
app.use("/carrinho", carrinhoRoutes);

// Rota de teste
app.get("/", (req, res) => {
  res.send("Backend Meteora rodando!");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
