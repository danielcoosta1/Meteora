// src/routes/carrinho.js
import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// GET: /carrinho/:userId
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const carrinho = await prisma.carrinho.findUnique({
      where: { userId },
    });

    if (!carrinho) {
      return res.status(200).json({ produtos: [] }); // retorna vazio se não existir
    }

    return res.status(200).json({ produtos: carrinho.produtos });
  } catch (error) {
    console.error("Erro ao buscar carrinho:", error);
    return res.status(500).json({ error: "Erro ao buscar carrinho." });
  }
});

// POST: /carrinho/:userId
router.post("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { produtos } = req.body;

  try {
    const carrinhoAtualizado = await prisma.carrinho.upsert({
      where: { userId },
      update: { produtos },
      create: { userId, produtos },
    });

    return res.status(200).json(carrinhoAtualizado);
  } catch (error) {
    console.error("Erro ao salvar carrinho:", error);
    return res.status(500).json({ error: "Erro ao salvar carrinho." });
  }
});

export default router;
