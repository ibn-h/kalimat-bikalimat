import { useEffect, useState } from "react";
import Ayah from "./ayah.jsx";

function AyahContainer({
  id,
  ayahData = {},
  ayahsToShow = ayahData.totalAyah,
}) {
  const [inEnglish, setInEnglish] = useState([]);
  const [inArabic, setInArabic] = useState([]);

  useEffect(() => {
    if (ayahData?.english && ayahData?.arabic1) {
      setInEnglish(ayahData.english);
      setInArabic(ayahData.arabic1);
    }
  }, [ayahData]);

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
