import axios from "axios";
import { initializeDatabase } from "./database.js";

async function populate() {
  const db = await initializeDatabase();

  for (let surah = 110; surah <= 114; surah++) {
    console.log("Fetching surah", surah);

    const url = `http://api.alquran.cloud/v1/surah/${surah}/editions/quran-uthmani,en.transliteration,en.asad`;
    const res = await axios.get(url);

    const arabic = res.data.data[0];
    const translit = res.data.data[1];
    const trans = res.data.data[2];

    await db.run(
      `INSERT OR REPLACE INTO surahs
       (id, name_arabic, name_english, number_of_ayahs)
       VALUES (?, ?, ?, ?);`,
      arabic.number,
      arabic.name,
      arabic.englishName,
      arabic.numberOfAyahs
    );

    for (let i = 0; i < arabic.ayahs.length; i++) {
      await db.run(
        `INSERT INTO ayahs
         (surah_id, ayah_number, arabic, transliteration, translation)
         VALUES (?, ?, ?, ?, ?);`,
        arabic.number,
        arabic.ayahs[i].numberInSurah,
        arabic.ayahs[i].text,
        translit.ayahs[i].text,
        trans.ayahs[i].text
      );
    }
  }

  console.log("Done populating!");
}

populate();
