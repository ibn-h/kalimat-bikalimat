import { useState, useEffect } from "react";
import { data, Navigate, useParams } from "react-router-dom";

import AyahContainer from "../components/ayahContainer.jsx";

function SurahPage() {
  const [ayahData, setAyahData] = useState({});

  let { id } = useParams();
  id = Number(id);

  return (
    <div className="bg-amber-50 min-h-screen p-8">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-5xl">{ayahData.surahNameTranslation}</h1>
        <div>
          <button className="bg-gray-300 cursor-pointer">Memorize</button>
        </div>
        
        <AyahContainer id={id} />
      </div>
    </div>
  );
}

export default SurahPage;
