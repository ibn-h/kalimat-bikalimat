function ChapterPreview({ number, nameInLatin, nameInEnglish, ayahsAmount }) {
  return (
    <div id="chapter-preview">
      <a
        href={"/" + number}
        className="flex w-[350px] bg-amber-50 items-center justify-between p-3 gap-3 border rounded-lg"
      >
        <div className="flex gap-3">
          <div>{number}</div>
          <div className="flex flex-col text-left">
            <h3>{nameInEnglish}</h3>
            <h4>{nameInLatin}</h4>
          </div>
        </div>
        <div>{ayahsAmount}</div>
      </a>
    </div>
  );
}

export default ChapterPreview;
