import React, { useEffect, useState } from "react";

import ChapterPreview from "../components/chapterPreview.jsx";
import { fetchChapters } from "../utils/ayahFunctions.jsx";
import About from "../components/about.jsx";

function Home() {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    async function getChapters() {
      const data = await fetchChapters();
      setChapters(data);
    }

    getChapters();
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center justify-center p-8">
      <About />
      <div
        id="chapters-container"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {chapters.map((data, index) => (
          <ChapterPreview
            key={index}
            number={index + 1}
            englishName={data.name_english}
            arabicName={data.name_arabic}
            ayahCount={data.number_of_ayahs}
          ></ChapterPreview>
        ))}
      </div>
    </div>
  );
}

export default Home;
