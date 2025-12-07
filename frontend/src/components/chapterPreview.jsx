import star from "../assets/svg/star.svg";

const ChapterPreview = ({ number, arabicName, englishName, ayahCount }) => {
  return (
    <a
      href={`/${number}`}
      className="flex items-center justify-between p-4 bg-neutral-100 rounded-2xl w-full"
    >
      <div className="flex items-center gap-4">
        <div
          className="relative w-13 h-13"
          role="img"
          aria-label={`Chapter ${number}`}
        >
          <img
            className="absolute inset-0 w-full h-full"
            alt=""
            src={star}
            aria-hidden="true"
          />

          <div className="absolute inset-0 flex items-center justify-center font-normal text-celadon-blue text-base">
            {number}
          </div>
        </div>

        <div className="flex flex-col items-start gap-1">
          <h2 className="font-normal text-black-95 text-base">{arabicName}</h2>

          <p className="font-normal text-black-50 text-xs">{englishName}</p>
        </div>
      </div>

      <div className="font-normal text-black-50 text-xs">{ayahCount}</div>
    </a>
  );
};

export default ChapterPreview;
