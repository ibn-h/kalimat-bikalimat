import { useState, useEffect } from "react";

import Ayah from "../components/ayah.jsx";

function AyahContainer({ id, ayahData = {} }) {
  const inEnglish = ayahData.english || [];
  const inArabic = ayahData.arabic1 || [];

  return (
    <div id="ayahs-container" className="flex flex-col gap-4">
      {inEnglish.map((ayah, index) => (
        <Ayah
          key={index}
          ayahInArabic={inArabic[index]}
          ayahInEnglish={ayah}
          ayahNumber={index + 1}
          surahNumber={id}
        ></Ayah>
      ))}
    </div>
  );
}

export default AyahContainer;
