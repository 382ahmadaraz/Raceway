const Main = () => {
  return (
    <div
      className="relative w-full h-80 bg-cover bg-no-repeat bg-top py-24 lg:py-36 lg:h-[28rem] xl:h-[30rem]"
      style={{ backgroundImage: `url('/image/background.jpg')` }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center md:items-baseline sm:px-8 xl:px-20 2xl:px-40">
        <p className="uppercase text-3xl tracking-[1.44px] leading-[63px] lg:leading-[90px] md:text-[30px] lg:text-[42px] italic font-extrabold text-[#fff]">
        REGISTRATION
        </p>
        <p className="uppercase text-5xl leading-[32px] lg:leading-[45px] md:text-[65px] md:leading-[44px] tracking-[1.44px] lg:text-[80px] italic font-bold text-[#fff]">
        NOW OPEN!
        </p>
      </div>
    </div>
  );
};

export default Main;
