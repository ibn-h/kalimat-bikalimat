import React from "react";
// import quran from "../assets/svg/quran.svg";

function About() {
  return (
    <section className="flex flex-col items-center gap-4 p-6 bg-neutral-100 rounded-2xl max-w-[978px] w-full">
      <div className="flex items-center gap-6 w-full">
        {/* <div
          className="relative w-[183px] h-[180px] bg-[url(/quran.svg)] bg-position-[100%_100%]"
          role="img"
          aria-label="Kalimat Bikalimat logo"
        /> */}

        <div className="flex flex-col items-start gap-4 flex-1">
          <h1 className="font-semibold text-4xl text-variable-collection-black-95">
            Kalimat Bikalimat
          </h1>

          <p className="font-normal text-variable-collection-black-85 text-lg">
            Your companion for memorizing the Holy Quran, word by word. With
            features like progress tracking, distraction-free practice, and
            multi-language translations, strengthen your memorization with ease.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
