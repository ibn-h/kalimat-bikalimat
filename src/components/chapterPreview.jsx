import React from "react";

function chapterPreview({ number, nameInLatin, nameInEnglish, ayahsAmount }) {
  return (
    <div id="chapter-preview">
      <div>{number}</div>
      <div>
        <h3>{nameInEnglish}</h3>
        <h4>{nameInLatin}</h4>
      </div>
      <div>{ayahsAmount}</div>
    </div>
  );
}

export default chapterPreview;
