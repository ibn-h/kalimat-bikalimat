import React from "react";

function surahPreview({ number, nameInLatin, nameInEnglish, ayahsAmount }) {
  return (
    <div>
      <div>{number}</div>
      <div>
        <h3>{nameInEnglish}</h3>
        <h4>{nameInLatin}</h4>
      </div>
      <div>{ayahsAmount}</div>
    </div>
  );
}

export default surahPreview;
