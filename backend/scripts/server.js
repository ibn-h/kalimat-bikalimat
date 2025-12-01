import express from "express";
import cors from "cors";
import { initializeDatabase } from "./database.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Quran API");
});

app.get("/surahs", async (req, res) => {
  const db = await initializeDatabase();
  const surahs = await db.all("SELECT * FROM surahs");
  res.json(surahs);
});

app.get("/surah/:id", async (req, res) => {
  const id = req.params.id;
  const db = await initializeDatabase();

  const surah = await db.get("SELECT * FROM surahs WHERE id = ?", id);
  const ayahs = await db.all(
    "SELECT * FROM ayahs WHERE surah_id = ? ORDER BY ayah_number",
    id
  );

  res.json({ surah, ayahs });
});

app.listen(3000, "0.0.0.0", () =>
  console.log("API running on http://localhost:3000")
);
