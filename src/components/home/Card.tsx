const CardHome = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`bg-[#000] flex flex-wrap justify-center items-center text-[#fff] max-w-[216px] max-h-[347px]`}
      >
        <h1 className="text-[24px] font-extrabold italic leading-[48px] tracking-[0.32px]">ROUND 1</h1>
        <img    
          className="w-[199px] h-[146px] max-w-[199px] max-h-[146px]"
          src={"/image/round.png"}
          alt="Map_Img"
        />
        <div className="py-1 lg:py-6">
          <p className="text-[24px] font-extrabold italic leading-[36px]">
            UAE RMC
          </p>
          <p className="text-[24px] font-extrabold italic leading-[36px]">
            2024-25 Rx
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
