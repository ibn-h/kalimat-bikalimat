import { useState, useEffect } from "react";

import Ayah from "../components/ayah.jsx";

function AyahContainer({
  id,
  ayahData = {},
  ayahsToShow = ayahData.totalAyah,
}) {
  const inEnglish = ayahData.english || [];
  const inArabic = ayahData.arabic1 || [];

  return (
    <div id="ayahs-container" className="flex flex-col gap-4">
      {inEnglish.slice(0, ayahsToShow).map((ayah, index) => (
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
