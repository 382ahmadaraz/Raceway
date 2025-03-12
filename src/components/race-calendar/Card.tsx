import Heading from "../common/Heading";

interface CardProps {
  roundNumber: string;
  date: string | number;
  eventLogo: string;
  eventName: string;
  trackImage: string;
}

const Card: React.FC<CardProps> = ({
  roundNumber,
  date,
  eventLogo,
  eventName,
  trackImage,
}) => {
  return (
    <div className="relative w-[233px] h-[300px] bg-black rounded-md">
      <div className="absolute top-0 right-0 bg-red-600 w-8 h-8 clip-triangle"></div>
      <Heading
        level={4}
        text={roundNumber}
        customHeadingStyle="!text-[16px] !font-semibold bg-[#FE0000] py-0.5 px-2 m-3 mb-4 max-w-fit rounded-sm"
      />

      <div className="flex items-center h-9 pl-5 text-white bg-[#007936]">
        <img
          src={"/favicon/calender.svg"}
          alt={"calendar-icon"}
          width={20}
          height={20}
        />
        <p className="text-lg font-bold italic pl-1.5">
          {date}
          <span className="text-[0.625rem] font-semibold italic pl-1">March</span>
        </p>
      </div>

      <img
        width={65}
        height={30}
        src={eventLogo}
        alt={`${eventName} Logo`}
        className="object-cover max-h-8 mb-1.5 m-3"
      />

      <Heading
        level={2}
        text={eventName}
        customHeadingStyle="text-white text-center mb-2 m-3"
      />

      <div className="w-[201px] h-[87px] bg-[#1A1A1A] flex justify-center items-center rounded-md m-3">
        <img
          src={trackImage}
          alt="Track Layout"
          width={142}
          height={80}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Card;
