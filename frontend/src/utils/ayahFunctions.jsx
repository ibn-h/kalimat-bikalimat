const API = "http://localhost:3000";

async function fetchAyahData(surahNumber) {
  const URL = `${API}/surah/${surahNumber}`;

  try {
    const response = await fetch(URL);
    return response.json();
  } catch (error) {
    console.error("Failed to fetch ayah data:", error);
    return null;
  }
}

async function fetchChapters() {
  const URL = `${API}/surahs`;

  try {
    const response = await fetch(URL);
    return response.json();
  } catch (error) {
    console.error("Failed to fetch chapters data:", error);
    return null;
  }
}

function countAyah(ayahText) {
  let count = 0;

  for (let char of ayahText) {
    if (char === " ") {
      count++;
    }
  }

  return count + 1;
}

function separateAyah(ayahText) {
  const words = ayahText.split(" ");
  const chunks = [];

  for (let i = 0; i < words.length; i += 10) {
    const chunk = words.slice(i, i + 10).join(" ");
    chunks.push(chunk);
  }

  return chunks;
}

export { countAyah, separateAyah, fetchAyahData, fetchChapters };
