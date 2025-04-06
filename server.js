// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/finance", async (req, res) => {
  try {
    const response = await fetch("https://api.hgbrasil.com/finance");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados da API externa." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy rodando em http://localhost:${PORT}`);
});
