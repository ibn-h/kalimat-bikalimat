import { initializeDatabase } from "./database.js";

async function setup() {
  const db = await initializeDatabase();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS surahs (
      id INTEGER PRIMARY KEY,
      name_arabic TEXT,
      name_english TEXT,
      number_of_ayahs INTEGER
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS ayahs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      surah_id INTEGER,
      ayah_number INTEGER,
      arabic TEXT,
      transliteration TEXT,
      translation TEXT
    );
  `);

  console.log("Database initialized");
}

setup();
