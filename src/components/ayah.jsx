import React, { useState } from "react";

function Ayah({ ayahInArabic, ayahInEnglish }) {
  return (
    <div>
      <div className="ayahs-in-arabic">{ayahInArabic[0]}</div>
      <div className="translated-ayahs">{ayahInEnglish[0]}</div>
    </div>
  );
}

export default Ayah;
