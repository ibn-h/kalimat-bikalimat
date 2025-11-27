import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AyahContainer from "../components/ayahContainer.jsx";
import fetchAyahData from "../utils/fetchAyahData.jsx";
import SurahNavigation from "../components/surahNavigation.jsx";

function MemorizePage() {
  const [ayahData, setAyahData] = useState({});
  const [ayahsToShow, setAyahsToShow] = useState(1);

  console.log(ayahData);

  let { id } = useParams();
  id = Number(id);

  if (isNaN(id) || id > 114 || id < 1) {
    return <div>Unable to get Surah</div>;
  }

  useEffect(() => {
    fetchAyahData(id)
      .then((response) => response.json())
      .then((data) => {
        setAyahData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  return (
    <div className="bg-amber-50 min-h-screen p-8">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-5xl">Memorize {ayahData.surahNameTranslation}</h1>
        <SurahNavigation id={id} />
        <AyahContainer id={id} ayahData={ayahData} ayahsToShow={ayahsToShow} />
        <button
          onClick={() =>
            setAyahsToShow((prev) =>
              Math.min(prev + 1, ayahData.totalAyah || 1)
            )
          }
          className="bg-gray-300 cursor-pointer"
        >
          Next Ayah
        </button>
      </div>
    </div>
  );
}

export default MemorizePage;
