import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AyahContainer from "../components/ayahContainer.jsx";
import { fetchAyahData } from "../utils/ayahFunctions.jsx";

function MemorizePage() {
  const [ayahData, setAyahData] = useState({});
  const [ayahsToShow, setAyahsToShow] = useState(1);

  let { id } = useParams();
  id = Number(id);

  useEffect(() => {
    async function getAyahData() {
      const data = await fetchAyahData(id);
      setAyahData(data);
    }

    getAyahData();
  }, [id]);

  if (!ayahData.ayahs) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-5xl">Memorize {ayahData.surah.name_english}</h1>
        <a
          href={`/${id}`}
          className="text-base px-4 py-2 rounded-md text-white font-medium cursor-pointer bg-celadon-blue"
        >
          Stop
        </a>
        <AyahContainer
          id={id}
          ayahData={ayahData.ayahs}
          ayahsToShow={ayahsToShow}
        />
        {ayahsToShow < ayahData.ayahs.length && (
          <button
            onClick={() =>
              setAyahsToShow((prev) =>
                Math.min(prev + 1, ayahData.ayahs.length || 1)
              )
            }
            className="text-base px-4 py-2 rounded-md text-white font-medium cursor-pointer bg-celadon-blue"
          >
            Next Ayah
          </button>
        )}
      </div>
    </div>
  );
}

export default MemorizePage;
