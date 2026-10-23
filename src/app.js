const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "BeautySpace API funcionando correctamente 🚀",
  });
});

module.exports = app;
