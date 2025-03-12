import CountdownTimer from "./CountdownTimer";

const Countdown = () => {
  return (
    <div
      className="min-w-full min-h-52 bg-center bg-cover bg-[#000000CC]"
      style={{
        backgroundImage: 'url("/image/header-background.png")',
      }}
    >
      <div className="arw-container md:flex md:justify-between md:items-center md:py-16">
        <div className="md:w-5/6 md:flex md:items-center md:gap-x-4 xl:gap-x-6">
          <p className="w-full h-11 py-2 text-center md:w-1/3 md:self-center md:h-14 md:text-2xl lg:h-[62px] lg:w-[184px] lg:text-[28px] italic rounded-lg text-[#fff] text-xl font-bold bg-[#017735]">
            NEXT EVENT
          </p>
          <div className="flex flex-col items-center py-1 md:py-0 md:items-start">
            <p className="uppercase text-sm sm:text-base italic font-extrabold text-center text-[#fff]">
              12-13 OCTOBER 2024
            </p>
            <p className="uppercase text-3xl sm:text-4xl lg:text-5xl italic font-extrabold tracking-[1.44px] text-center text-[#fff]">
              ROUND 1
            </p>
            <p className="uppercase text-sm italic font-extrabold text-center md:text-start md:text-base lg:text-lg text-white">
              Al AIN RACEWAY INTERNATIONAL KART CIRCUIT
            </p>
          </div>
        </div>
        <CountdownTimer />
      </div>
    </div>
  );
};

export default Countdown;
