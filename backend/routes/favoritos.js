import express from "express";
import prisma from "../lib/prisma.js"; // instância do Prisma

const router = express.Router();

// GET: /favoritos/:userId
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const favoritos = await prisma.favoritos.findUnique({
      where: { userId },
    });

    if (!favoritos) {
      return res.status(200).json({ produtos: [] });
    }

    return res.status(200).json({ produtos: favoritos.produtos });
  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    return res.status(500).json({ error: "Erro ao buscar favoritos." });
  }
});

// POST: /favoritos/:userId
router.post("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { produtos } = req.body;

  try {
    const favoritosAtualizados = await prisma.favoritos.upsert({
      where: { userId },
      update: { produtos },
      create: { userId, produtos },
    });

    return res.status(200).json(favoritosAtualizados);
  } catch (error) {
    console.error("Erro ao salvar favoritos:", error);
    return res.status(500).json({ error: "Erro ao salvar favoritos." });
  }
});

export default router;
