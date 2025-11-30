import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import AyahContainer from "../components/ayahContainer.jsx";
import fetchAyahData from "../utils/fetchAyahData.jsx";
import SurahNavigation from "../components/surahNavigation.jsx";

function SurahPage() {
  const [ayahData, setAyahData] = useState({});

  const { id } = useParams();
  const surahID = Number(id);

  useEffect(() => {
    if (isNaN(surahID) || surahID > 114 || surahID < 1) {
      return;
    }

    fetchAyahData(id)
      .then((response) => response.json())
      .then((data) => {
        setAyahData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id, surahID]);

  if (isNaN(surahID) || surahID > 114 || surahID < 1) {
    return <div>Unable to get Surah</div>;
  }

  return (
    <div className="bg-amber-50 min-h-screen p-8">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-5xl">{ayahData.surahNameTranslation}</h1>
        <SurahNavigation id={surahID} />

        <AyahContainer id={surahID} ayahData={ayahData} />
      </div>
    </div>
  );
}

export default SurahPage;
