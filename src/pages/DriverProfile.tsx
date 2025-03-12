import Banner from "../components/common/Banner";

export default function DriverProfile() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(#000000CC, #000000CC), url(/image/background1.png)",
      }}
    >
      <Banner bannerText={"Driver Profile"} showBorder={true} isShow={false} />
    </div>
  );
}
