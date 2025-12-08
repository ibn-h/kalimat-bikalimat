function Ayah({
  surahNumber,
  ayahNumber,
  ayahInArabic,
  translation,
  transliteration,
}) {
  const wordsInArabic = ayahInArabic.split(" ").reverse();

  return (
    <article className="flex flex-col w-[978px] items-start gap-6 relative">
      <div className="inline-flex flex-col items-center justify-center px-6 py-4 bg-[#d4e7f2] rounded-[92px] relative flex-[0_0_auto]">
        <div className="font-['Poppins-Regular',Helvetica] text-[#2a87ac] text-base leading-6 relative mt-[-1.00px]">
          {surahNumber}:{ayahNumber}
        </div>
      </div>
      <div className="flex items-center justify-end w-full relative flex-[0_0_auto] flex-wrap">
        {wordsInArabic.map((word, index) => (
          <div
            key={index}
            className="inline-flex flex-col h-[158px] items-center justify-between p-3 relative flex-[0_0_auto]"
          >
            <div className="font-['KFGQPC_Uthmanic_Script_HAFS-Regular',Helvetica] text-variable-collection-black-85 text-6xl text-center leading-[90px] [direction:rtl] relative mt-[-1.00px]">
              {word}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start gap-1 w-full relative flex-[0_0_auto]">
        <div className="relative font-['Poppins-Regular',Helvetica] text-variable-collection-black-85 text-base leading-6">
          {transliteration}
        </div>
        <div className="relative font-['Poppins-Regular',Helvetica] text-variable-collection-black-50 text-base leading-6">
          — Transliteration (Tajweed)
        </div>
      </div>
      <div className="flex flex-col items-start gap-1 w-full relative flex-[0_0_auto]">
        <p className="relative font-['Poppins-Regular',Helvetica] text-variable-collection-black-85 text-base leading-6">
          {translation}
        </p>
        <div className="relative font-['Poppins-Regular',Helvetica] text-variable-collection-black-50 text-base leading-6">
          — English Translation
        </div>
      </div>
      <hr className="relative w-full h-px border-gray" />
    </article>
  );
}

export default Ayah;
