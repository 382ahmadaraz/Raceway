import Banner from "../components/common/Banner";
import Card from "../components/race-calendar/Card";

export default function RaceCalendar() {
  const cardsData = [
    {
      roundNumber: "Round 1",
      date: "29 - 02",
      eventLogo: "/image/race-calendar/card3.png",
      eventName: "Dubai Raceway",
      trackImage: "/image/card1.png",
      showCornerRibbon: true,
    },
    {
      roundNumber: "Round 2",
      date: "05 - 07",
      eventLogo: "/image/race-calendar/card2.png",
      eventName: "Abu Dhabi Circuit",
      trackImage: "/image/card2.png",
      showCornerRibbon: true,
    },
    {
      roundNumber: "Round 3",
      date: "12 - 14",
      eventLogo: "/image/race-calendar/card1.png",
      eventName: "Sharjah Track",
      trackImage: "/image/card3.png",
      showCornerRibbon: false,
    },
    {
      roundNumber: "Round 4",
      date: "19 - 21",
      eventLogo: "/image/race-calendar/card3.png",
      eventName: "Yas Marina Circuit",
      trackImage: "/image/card4.png",
      showCornerRibbon: true,
    },
    {
      roundNumber: "Round 5",
      date: "26 - 28",
      eventLogo: "/image/race-calendar/card2.png",
      eventName: "Dubai Raceway",
      trackImage: "/image/card5.png",
      showCornerRibbon: false,
    },
    {
      roundNumber: "Round 6",
      date: "03 - 05",
      eventLogo: "/image/race-calendar/card1.png",
      eventName: "Abu Dhabi Circuit",
      trackImage: "/image/card6.png",
      showCornerRibbon: true,
    },
    {
      roundNumber: "Round 7",
      date: "10 - 12",
      eventLogo: "/image/race-calendar/card3.png",
      eventName: "Sharjah Track",
      trackImage: "/image/card7.png",
      showCornerRibbon: false,
    },
    {
      roundNumber: "Round 8",
      date: "17 - 19",
      eventLogo: "/image/race-calendar/card2.png",
      eventName: "Yas Marina Circuit",
      trackImage: "/image/card8.png",
      showCornerRibbon: true,
    },
    {
      roundNumber: "Round 9",
      date: "24 - 26",
      eventLogo: "/image/race-calendar/card1.png",
      eventName: "Dubai Raceway",
      trackImage: "/image/card9.png",
      showCornerRibbon: false,
    },
    {
      roundNumber: "Round 10",
      date: "01 - 03",
      eventLogo: "/image/race-calendar/card3.png",
      eventName: "Abu Dhabi Circuit",
      trackImage: "/image/card10.png",
      showCornerRibbon: true,
    },
    {
      roundNumber: "Round 11",
      date: "08 - 10",
      eventLogo: "/image/race-calendar/card2.png",
      eventName: "Sharjah Track",
      trackImage: "/image/card11.png",
      showCornerRibbon: false,
    },
    {
      roundNumber: "Round 12",
      date: "15 - 17",
      eventLogo: "/image/race-calendar/card1.png",
      eventName: "Yas Marina Circuit",
      trackImage: "/image/card12.png",
      showCornerRibbon: true,
    },
    {
      roundNumber: "Round 13",
      date: "22 - 24",
      eventLogo: "/image/race-calendar/card3.png",
      eventName: "Dubai Raceway",
      trackImage: "/image/card13.png",
      showCornerRibbon: false,
    },
    {
      roundNumber: "Round 14",
      date: "29 - 31",
      eventLogo: "/image/race-calendar/card2.png",
      eventName: "Abu Dhabi Circuit",
      trackImage: "/image/card14.png",
      showCornerRibbon: true,
    },
    {
      roundNumber: "Round 15",
      date: "05 - 07",
      eventLogo: "/image/race-calendar/card1.png",
      eventName: "Sharjah Track",
      trackImage: "/image/card15.png",
      showCornerRibbon: false,
    },
    {
      roundNumber: "Round 16",
      date: "12 - 14",
      eventLogo: "/image/race-calendar/card3.png",
      eventName: "Yas Marina Circuit",
      trackImage: "/image/card16.png",
      showCornerRibbon: true,
    },
  ];

  return (
    <>
      <Banner bannerText={"Race Calendar"} showDropdown={true} />
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(#000000CC, #000000CC), url(/image/background1.png)",
        }}
      >
        <div className="arw-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {cardsData.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </div>
    </>
  );
}
