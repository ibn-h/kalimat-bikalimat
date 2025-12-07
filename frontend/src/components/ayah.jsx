function Ayah({
  surahNumber,
  ayahNumber,
  ayahInArabic,
  translation,
  transliteration,
}) {
  return (
    <div className="flex bg-amber-50 w-full py-8 gap-3 border-b border-black/15">
      <div className="bg-amber-50">
        {surahNumber}:{ayahNumber}
      </div>
      <div className="w-full lg:max-w-3xl flex flex-col gap-3">
        <div>
          <div className="ayahs-in-arabic flex justify-end text-right font-arabic text-4xl">
            {ayahInArabic}
          </div>
          <div>{transliteration}</div>
        </div>
        <div className="translated-ayahs text-left">{translation}</div>
      </div>
    </div>
  );
}

export default Ayah;
