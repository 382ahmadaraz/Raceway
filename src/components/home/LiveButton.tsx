import Button from "../common/Button";
const LiveButton = () => {
  return (
    <div className="arw-container pt-0">
      <div
        className="w-full h-32 rounded-lg bg-cover bg-no-repeat bg-center flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center sm:px-8 lg:px-8 xl:px-10 2xl:px-[7.5rem] p-4 sm:justify-between sm:mx-auto sm:h-28 lg:h-40"
        style={{ backgroundImage: `url(/image/barner.jpeg)` }}
      >
        <div className="flex">
          <img src={"/favicon/vector2.svg"} alt="vector-icon" className="p-1 bg-[#007936]" />
          <Button type="button" text="LIVE TIMING" customButtonStyle="p-2" />
        </div>
        <div className="flex">
          <img src={"/favicon/vector1.svg"} alt="vector-icon" className="p-1 bg-[#007936]" />
          <Button type="button" text="LIVE RESULTS" customButtonStyle="p-2" />
        </div>
      </div>
    </div>
  );
};

export default LiveButton;
