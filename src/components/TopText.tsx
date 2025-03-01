import React from "react";
const TopText = ({
  customParent,
  subHeading,
  customStyle,
  customClass = "",
  btnStyle,
  btnTxt,
  customBorder,
}) => {
  return (
    <div className="w-[100vw] text-white relative flex flex-col max-w-full overflow-hidden">
      <img
        src="/bgRacerCalendar.png"
        alt="bgImg"
        className={`w-full h-full ${customStyle}`}
      />
      <div
        className={`btn flex flex-wrap items-center justify-center sm:justify-normal sm:top-2 absolute top-0 ${customClass} lg:top-12 xl:top-10 gap-4 lg:gap-10 self-center sm:self-start sm:left-14 lg:left-20 text-2xl lg:text-[32px] font-extrabold tracking-[0.32px] leading-[48px] italic ${customParent}`}
      >
        <div className="txt">{subHeading}</div>
        <button
          className={`hidden w-56 h-9 text-sm font-semibold leading-[21px] whitespace-nowrap rounded-md text-[#ffffff] bg-[#FC0001] ${btnStyle}`}
        >
          {btnTxt}
        </button>
        <div
          className={`hidden border-b border-[#FC0001] w-full ${customBorder}`}
        ></div>
      </div>
    </div>
  );
};

export default TopText;
