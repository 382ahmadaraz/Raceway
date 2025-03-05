import { Link } from "react-router-dom";
import Button from "../common/Button";
const LiveButton = () => {
  return (
    <div className=" container mx-auto">
      <div className="bg-[#000] sm:mx-8 md:mx-10">
        <div
          className="w-full h-32 rounded-lg bg-cover bg-no-repeat bg-center flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center sm:px-8 lg:px-8 xl:px-10 2xl:px-[7.5rem] p-4 sm:justify-between sm:mx-auto sm:h-28 lg:h-40"
          style={{ backgroundImage: `url(/whatsapp.jpeg)` }}
        >
          <Link to="/live_timing" style={{ textDecoration: "none" }}>
            <Button svg={<img src="/clock.svg" />} text="LIVE TIMING" />
          </Link>
          <Link to="/LiveResults" style={{ textDecoration: "none" }}>
            <Button svg={<img src="/layer.svg" />} text="LIVE RESULTS" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LiveButton;
