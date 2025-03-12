// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

import "../../style/Swiper.css";

// import required modules
import { Navigation } from "swiper/modules";
import Card from "./Card";

export default function App() {
  const SwiperSlides = [
    {
      title: "ROUND 1",
      imgSrc: "/image/map1.png",
      subText1: "UAE RMC",
      subText2: "2024-25 Rx",
    },
    {
      title: "ROUND 2",
      imgSrc: "/image/map2.png",
      subText1: "UAE RMC",
      subText2: "2024-25 Rx",
    },
    {
      title: "ROUND 3",
      imgSrc: "/image/map3.png",
      subText1: "UAE RMC",
      subText2: "2024-25 Rx",
    },
    {
      title: "ROUND 4",
      imgSrc: "/image/map1.png",
      subText1: "UAE RMC",
      subText2: "2024-25 Rx",
    },
  ];
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={1}
        modules={[Navigation]}
        slideActiveClass="asd"
        centeredSlides={true}
      >
        <SwiperSlide>
          {SwiperSlides.map((val, i) => {
            return <Card />;
          })}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
