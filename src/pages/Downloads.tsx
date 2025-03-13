import Banner from "../components/common/Banner";
import DownloadCard from "../components/downloads/DownloadCard";

export default function Downloads() {
  return (
    <>
      <Banner text="Downloads" showBackground={true} showBorder={true} />
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(#000000CC, #000000CC), url(/image/background1.png)",
        }}
      >
        <div className="arw-container grid grid-rows-3 gap-[30px]">
          {[1, 2, 3].map((item, i) => {
            return <DownloadCard />;
          })}
        </div>
      </div>
    </>
  );
}
