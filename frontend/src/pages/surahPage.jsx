import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import AyahContainer from "../components/ayahContainer.jsx";
import SurahNavigation from "../components/surahNavigation.jsx";

import { fetchAyahData } from "../utils/ayahFunctions.jsx";

function SurahPage() {
  const [ayahData, setAyahData] = useState({
    surah: {},
    ayahs: [],
  });

  let { id } = useParams();
  id = Number(id);

  useEffect(() => {
    async function getAyahData() {
      const data = await fetchAyahData(id);
      setAyahData(data);
    }

    getAyahData();
  }, [id]);

  console.log(ayahData);

  return (
    <div className="bg-amber-50 min-h-screen p-8">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-5xl">{ayahData.surah.name_english}</h1>
        <SurahNavigation id={id} />
        <AyahContainer id={id} ayahData={ayahData.ayahs} />
      </div>
    </div>
  );
}

export default SurahPage;
