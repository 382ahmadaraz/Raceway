const Calender = () => {
  return (
    <div>
      <div
        className="bg-contain bg-center lg:h-32 lg:bg-no-repeat"
        style={{ backgroundImage: `url(/image/bgCalender.png)` }}
      >
        <div className="container mx-auto flex gap-x-2 py-4 lg:py-11 items-center p-4 sm:px-8 xl:px-20 2xl:px-40">
          <p className="text-xl font-bold italic whitespace-nowrap text-white sm:text-2xl md:text-3xl">
            Racer Calendar
          </p>
          <div className="Line border w-full border-[#FE0000]"></div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
