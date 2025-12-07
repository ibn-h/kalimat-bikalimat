import star from "../assets/svg/star.svg";

const ChapterPreview = ({ number, arabicName, englishName, ayahCount }) => {
  return (
    <a
      href={`/${number}`}
      className="flex w-[315.33px] items-center justify-between p-5 relative bg-neutral-100 rounded-[30px]"
    >
      <div className="items-center gap-5 inline-flex relative flex-[0_0_auto]">
        <div
          className="relative w-[52px] h-[52px]"
          role="img"
          aria-label={`Chapter ${number}`}
        >
          <img
            className="absolute w-[97.90%] h-[97.91%] top-0 left-0"
            alt=""
            src={star}
            aria-hidden="true"
          />

          <div className="absolute w-[11.54%] h-[30.77%] top-[34.62%] left-[44.23%] font-['Poppins-Regular',Helvetica] font-normal text-celadon-blue text-base text-center tracking-[0] leading-4 whitespace-nowrap">
            {number}
          </div>
        </div>

        <div className="flex-col items-start gap-1 inline-flex relative flex-[0_0_auto]">
          <h2 className="relative self-stretch font-['Poppins-Regular',Helvetica] font-normal text-black-95 text-base tracking-[0] leading-6">
            {arabicName}
          </h2>

          <p className="relative self-stretch font-['Poppins-Regular',Helvetica] font-normal text-black-50 text-xs tracking-[0] leading-[18px]">
            {englishName}
          </p>
        </div>
      </div>

      <div className="relative w-fit font-['Poppins-Regular',Helvetica] font-normal text-black-50 text-xs tracking-[0] leading-[18px] whitespace-nowrap">
        {ayahCount}
      </div>
    </a>
  );
};

export default ChapterPreview;
