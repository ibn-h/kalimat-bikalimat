import {} from "react";
import Ayah from "./ayah.jsx";

function AyahContainer({ id, ayahData = {}, ayahsToShow = ayahData.length }) {
  return (
    <div id="ayahs-container" className="flex flex-col gap-4">
      {ayahData.slice(0, ayahsToShow).map((ayah, index) => (
        <Ayah
          key={index}
          ayahNumber={ayah.ayah_number}
          surahNumber={id}
          ayahInArabic={ayah.arabic}
          translation={ayah.translation}
          transliteration={ayah.transliteration}
        ></Ayah>
      ))}
    </div>
  );
}

export default AyahContainer;
