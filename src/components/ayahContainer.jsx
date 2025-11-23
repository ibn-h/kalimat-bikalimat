import { useState, useEffect } from "react";

import Ayah from "../components/ayah.jsx";

function AyahContainer({ id }) {
  const [ayahData, setAyahData] = useState({});

  if (isNaN(id) || id > 113 || id < 1) {
    return <div>Unable to get Surah</div>;
  }

  useEffect(() => {
    fetch(`https://quranapi.pages.dev/api/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setAyahData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div id="ayahs-container" className="flex flex-col gap-4">
      {ayahData.english ? (
        ayahData.english.map((ayah, index) => (
          <Ayah
            key={index}
            ayahInArabic={ayahData.arabic1[index]}
            ayahInEnglish={ayah}
            ayahNumber={index + 1}
            surahNumber={id}
          ></Ayah>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default AyahContainer;
