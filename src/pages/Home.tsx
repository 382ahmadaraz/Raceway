import Main from "../components/home/Main";
import LiveButton from "../components/home/LiveButton";
import Calender from "../components/common/Banner";
import Partners from "../components/home/Partners";
import Countdown from "../components/home/Countdown";
import SwiperCard from "../components/home/Swiper";

export default function Home() {
  return (
    <>
      <Countdown />
      <Main />
      <LiveButton />
      <Calender />
      <SwiperCard />
      <Partners />
    </>
  );
}
