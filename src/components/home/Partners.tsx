const Partners = () => {
  return (
    <div className="bg-[#111111] h-80 sm:h-64 lg:h-48 py-4">
      <div className="container mx-auto flex items-center gap-x-2 p-4 sm:px-8 xl:px-20 2xl:px-40">
        <p className="text-lg lg:text-2xl italic font-extrabold tracking-wider whitespace-nowrap text-[#fff]">
        Our Partners
        </p>
        <div className="w-full border-b border-[#FB0001]"></div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center items-center p-2 gap-8 sm:px-8 xl:px-20 2xl:px-40 sm:gap-8 xl:gap-16">
        <img
          src={'/image/partner.png'}
          alt="Partner_Logo"
          className="w-[130px] max-w-[130px]"
        />
        <img
          src={'/image/partner.png'}
          alt="Partner_Logo"
          className="w-[130px] max-w-[130px]"
        />
        <img
          src={'/image/partner.png'}
          alt="Partner_Logo"
          className="w-[130px] max-w-[130px]"
        />
        <img
          src={'/image/partner.png'}
          alt="Partner_Logo"
          className="w-[130px] max-w-[130px]"
        />
        <img
          src={'/image/partner.png'}
          alt="Partner_Logo"
          className="w-[130px] max-w-[130px]"
        />
        <img
          src={'/image/partner.png'}
          alt="Partner_Logo"
          className="w-[130px] max-w-[130px]"
        />
      </div>
    </div>
  );
};

export default Partners;
