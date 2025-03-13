import Heading from "../common/Heading";

const DownloadFeature = () => {
  return (
    <div className="flex items-center justify-between w-[18.5rem] h-[3.063rem] bg-[#F50005] rounded-[8px] px-4">
      <span className="text-xs whitespace-nowrap text-white font-medium">
        DAMC 2023/2024 ENTRY FORM
      </span>
      <a
        href="/path/to/entry-form.pdf"
        className="text-[13px] px-3 py-1 text-white bg-[#000000] rounded"
        download
        aria-label="Download DAMC 2023/2024 Entry Form"
      >
        Download
      </a>
    </div>
  );
};

const DownloadCard = () => {
  return (
    <section
      className="w-full h-[22.938rem] rounded-[10px] bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url(/image/download-card-bg.png)",
      }}
    >
      <div className="flex justify-between items-center px-[40px] py-[27px]">
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
      <div className="px-[40px] pb-[27px] grid grid-cols-3 gap-[18px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, i) => {
          return <DownloadFeature />;
        })}
      </div>
    </section>
  );
};

export default DownloadCard;
