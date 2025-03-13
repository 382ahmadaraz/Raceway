import Heading from "../common/Heading";

const DownloadFeature = () => {
  return (
    <div className="min-w-[16rem] lg:max-w-[25.5rem] h-[3.063rem] flex justify-between items-center px-3 rounded-[8px] bg-[#F50005]">
      <span className="text-xs font-medium text-white">
        DAMC 2023/2024 ENTRY FORM
      </span>
      <a className="text-[13px] font-medium px-2 py-1 rounded-md text-white bg-black">
        Download
      </a>
    </div>
  );
};

const DownloadCard = () => {
  return (
    <section
      className="w-full h-full lg:h-[22.938rem] rounded-[10px] bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url(/image/download-card-bg.png)",
      }}
    >
      <div className="lg:flex lg:justify-between lg:items-center px-[40px] py-[27px]">
        <div>
          <Heading level={1} text="DAMC CUP 2023/2024" />
          <p className="text-white mt-2">
            Lorem ipsum dolor sit amet consectetur. Eget bibendum faucibus et
            fames dictum in.
          </p>
        </div>
        <img
          src="/image/Dubai_download.png"
          alt="Download illustration for Dubai event"
          width={243}
          height={100}
        />
      </div>
      <div className="px-4 lg:px-[40px] pb-[27px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, i) => {
          return <DownloadFeature />;
        })}
      </div>
    </section>
  );
};

export default DownloadCard;
