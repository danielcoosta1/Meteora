// routes/favoritos.js
import express from "express";
import prisma from "../lib/prisma.js";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: "userId obrigatório." });
  }

  try {
    const favorito = await prisma.favoritos.findUnique({
      where: { userId },
    });

    if (!favorito) {
      return res.status(200).json({ produtos: [] });
    }

    return res.status(200).json({ produtos: favorito.produtos });
  } catch (erro) {
    console.error("Erro ao buscar favoritos:", erro);
    return res.status(500).json({ error: "Erro ao buscar favoritos." });
  }
});

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
  } catch (erro) {
    console.error("Erro ao salvar favoritos:", erro);
    return res.status(500).json({ error: "Erro ao salvar favoritos." });
  }
});

export default router;
