import React from "react";
// import quran from "../assets/svg/quran.svg";

function About() {
  return (
    <section className="flex flex-col items-center gap-4 p-8 relative bg-neutral-100 rounded-[30px] max-w-[978px] w-full">
      <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {/* <div
          className="relative w-[183px] h-[180px] bg-[url(/quran.svg)] bg-position-[100%_100%]"
          role="img"
          aria-label="Kalimat Bikalimat logo"
        /> */}

        <div className="flex flex-col items-start gap-4 relative flex-1 grow">
          <h1 className="relative self-stretch font-['Poppins-SemiBold',Helvetica] font-semibold text-variable-collection-black-95 text-[40px] tracking-[0] leading-[36.0px]">
            Kalimat Bikalimat
          </h1>

          <p className="relative self-stretch font-['Poppins-Regular',Helvetica] font-normal text-variable-collection-black-85 text-lg tracking-[0] leading-[27px]">
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
