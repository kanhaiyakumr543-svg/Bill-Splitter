import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const frontendPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "../frontend");

app.use(express.static(frontendPath));
app.get("/api/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Hisaab, Please running on port " + PORT));
