import React, { useState } from "react";

function Ayah({ ayahInArabic, ayahInEnglish, surahNumber, ayahNumber }) {
  return (
    <div className="flex bg-amber-50 w-full py-8 gap-3 border-b border-[#00000025]">
      <div className="bg-amber-50">
        {surahNumber}:{ayahNumber}
      </div>
      <div className="w-full lg:w-[750px] flex flex-col gap-3 rounded-lg">
        <div className="ayahs-in-arabic flex justify-end text-right">
          {ayahInArabic}
        </div>
        <div className="translated-ayahs text-left">{ayahInEnglish}</div>
      </div>
    </div>
  );
}

export default Ayah;
