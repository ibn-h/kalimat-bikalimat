import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import Ayah from "../components/ayah.jsx";

function SurahPage() {
  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  id = Number(id);

  if (isNaN(id) || id > 113 || id < 1) {
    return <div>Unable to get Surah</div>;
  }

  useEffect(() => {
    fetch("https://quranapi.pages.dev/api/1.json").then((response) =>
      response
        .json()
        .then((data) => {
          console.log(data);

          setAyahs(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching data: ", err);
          setLoading(false);
        })
    );
  }, []);

  return (
    <div>
      <h1>Surah Title</h1>
      <div id="ayahs-container">
        {ayahs.map((ayah, index) => (
          <Ayah
            key={index}
            ayahInArabic={ayah.arabic1}
            ayahInEnglish={ayah.english}
          ></Ayah>
        ))}
      </div>
    </div>
  );
}

export default SurahPage;
