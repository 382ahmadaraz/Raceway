const Partners = () => {
  return (
    <div className="bg-[#111111] h-80 sm:h-64 lg:h-48 py-4">
      <div className="arw-container flex items-center gap-x-2">
        <p className="text-lg lg:text-2xl italic font-extrabold tracking-wider whitespace-nowrap text-[#fff]">
          Our Partners
        </p>
        <div className="w-full border-b border-[#FB0001]"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-8 xl:gap-16">
        {[
          "/favicon/partner1.svg",
          "/favicon/partner2.svg",
          "/favicon/partner3.svg",
          "/favicon/partner4.svg",
          "/favicon/partner5.svg",
          "/favicon/partner6.svg",
        ].map((Path, index) => {
          return (
            <img
              key={index}
              src={Path}
              alt="Partner_Logo"
              className="w-[130px] max-w-[130px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
