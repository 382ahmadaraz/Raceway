const Main = () => {
  return (
    <div
      className="relative w-full h-80 bg-cover bg-center bg-no-repeat py-24 lg:py-36 lg:h-[28rem] xl:h-[32rem]"
      style={{ backgroundImage: `url('/image/background.png')` }}
    >
      <div className="arw-container flex flex-col justify-center items-center md:items-baseline">
        <p className="text-3xl tracking-[1.44px] md:text-[30px] lg:text-[42px] italic font-extrabold text-white">
          REGISTRATION
        </p>
        <p className="text-4xl md:text-[65px] tracking-[1.44px] lg:text-[80px] italic font-bold text-white">
          NOW OPEN!
        </p>
      </div>
    </div>
  );
};

export default Main;
