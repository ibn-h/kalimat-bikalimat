import React from "react";

function fetchAyahData(surahNumber) {
  return fetch(`https://quranapi.pages.dev/api/${surahNumber}.json`);
}

export default fetchAyahData;
