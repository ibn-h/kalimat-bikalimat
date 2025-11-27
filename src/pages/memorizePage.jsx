import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AyahContainer from "../components/ayahContainer.jsx";
import fetchAyahData from "../utils/fetchAyahData.jsx";

function MemorizePage() {
  const [ayahData, setAyahData] = useState({});

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

        <AyahContainer id={id} ayahData={ayahData} ayahsToShow={1} />
      </div>
    </div>
  );
}

export default MemorizePage;
