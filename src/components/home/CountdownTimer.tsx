const CountdownTimer = () => {
  return (
    <div className="flex justify-center items-center gap-2 flex-wrap md:w-[20%] lg:w-[35%] xl:w-[27%]">
      <div className="w-[62px] h-[68px] flex flex-col justify-center items-center bg-[#FE0000] text-center">
        <p className="text-3xl font-bold italic leading-[35px] text-[#fff]">
          05
        </p>
        <p className="text-xs italic font-bold text-[#fff]">Days</p>
      </div>
      <div className="w-[62px] h-[68px] flex flex-col justify-center items-center bg-[#FE0000] text-center">
        <p className="text-3xl font-bold italic leading-[35px] text-[#fff]">
          23
        </p>
        <p className="text-xs italic font-bold text-[#fff]">Hours</p>
      </div>
      <div className="w-[62px] h-[68px] flex flex-col justify-center items-center bg-[#FE0000] text-center">
        <p className="text-3xl font-bold italic leading-[35px] text-[#fff]">
          15
        </p>
        <p className="text-xs italic font-bold text-[#fff]">Minutes</p>
      </div>
      <div className="w-[62px] h-[68px] flex flex-col justify-center items-center bg-[#FE0000] text-center">
        <p className="text-3xl font-bold italic leading-[35px] text-[#fff]">
          35
        </p>
        <p className="text-xs italic font-bold text-[#fff]">Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
