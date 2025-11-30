function countAyah(ayahText) {
  let count = 0;

  for (let char of ayahText) {
    if (char === " ") {
      count++;
    }
  }

  return count + 1;
}

function seperateAyah(ayahText) {
  const words = ayahText.split(" ");
  const chunks = [];

  for (let i = 0; i < words.length; i += 10) {
    const chunk = words.slice(i, i + 10).join(" ");
    chunks.push(chunk);
  }

  return chunks;
}

export { countAyah, seperateAyah };
