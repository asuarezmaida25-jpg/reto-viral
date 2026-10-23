const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/status", (req, res) => {
  res.json({
    ok: true,
    app: "RETO VIRAL",
    mode: "development"
  });
});

app.get("/", (req, res) => {
  res.send(`
    <h1>RETO VIRAL</h1>
    <p>Tu plataforma de campañas virales está en construcción.</p>
    <p>Servidor preparado correctamente.</p>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`RETO VIRAL funcionando en puerto ${PORT}`);
});
