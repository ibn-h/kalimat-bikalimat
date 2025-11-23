import React, { useEffect, useState } from "react";

import ChapterPreview from "../components/chapterPreview.jsx";

function Home() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://quranapi.pages.dev/api/surah.json")
      .then((response) => response.json())
      .then((data) => {
        setChapters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-amber-50 flex flex-col gap-10 items-center justify-center p-8">
      <h1 className="text-6xl">The Holy Quran</h1>
      <div id="chapters-container" className="grid grid-cols-3 gap-3">
        {chapters.map((chapterData, index) => (
          <ChapterPreview
            key={index}
            number={index + 1}
            nameInEnglish={chapterData.surahNameTranslation}
            nameInLatin={chapterData.surahName}
            ayahsAmount={chapterData.totalAyah}
          ></ChapterPreview>
        ))}
      </div>
    </div>
  );
}

export default Home;
