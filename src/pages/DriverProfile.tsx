import Banner from "../components/common/Banner";
import Card from "../components/driver-profile/Card";
import SlideBar from "../components/driver-profile/SlideBar";

export default function DriverProfile() {
  return (
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(#000000CC, #000000CC), url(/image/background1.png)",
      }}
    >
      <Banner bannerText={"Driver Profile"} showBorder={true} isShow={false} />
      <div className="arw-container flex gap-[36px]">
        <SlideBar />
        <div className="grid grid-cols-2 gap-[23px]">
          {[1,2,3,4,5,6,7,8].map((item,index) => {
            return (
              <Card />
            )
          })}
        </div>
      </div>
    </div>
  );
}
