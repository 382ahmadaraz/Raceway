import Heading from "../common/Heading";

interface CardProps {
  bgGradient?: boolean;
  hasDubaiLogo?: boolean;
  imgSrc?: string;
  title?: string;
  buttonLabel?: string;
  headingText?: string;
  subText1?: string;
  subText2?: string;
}

const Card: React.FC<CardProps> = ({
  bgGradient = false,
  hasDubaiLogo = false,
  imgSrc,
  title,
  buttonLabel,
  headingText = "ROUND 1",
  subText1 = "UAE RMC",
  subText2 = "2024-25 Rx",
}) => {
  return (
    <div
      className="flex flex-wrap justify-center items-center max-w-[216px] max-h-[347px] p-4"
      style={{
        background: bgGradient
          ? "linear-gradient(180deg, #720000 0%, #FE0000 24.43%, #FE0000 78.84%, #7E0000 100%)"
          : "#000",
      }}
    >
      {/* Conditional Dubai Logo */}
      {hasDubaiLogo && <img src="/image/Dubai_logo.png" alt="Dubai Logo" />}

      {/* Heading */}
      <Heading
        level={1}
        text={headingText}
        customHeadingStyle="text-2xl font-bold italic"
      />

      {/* Optional Image */}
      {imgSrc && (
        <img
          className="w-[199px] h-[146px] max-w-[199px] max-h-[146px]"
          src={imgSrc}
          alt={title || "Card Image"}
        />
      )}

      {/* Button Section */}
      {buttonLabel ? (
        <div className="text-center">
          <p className="text-white text-lg font-semibold">17-18 JANUARY 2025</p>
          <button className="bg-white text-black px-4 py-2 mt-2 rounded">
            {buttonLabel}
          </button>
        </div>
      ) : (
        <div className="py-1 lg:py-6 text-center">
          <p className="text-[24px] font-extrabold italic leading-[36px]">
            {subText1}
          </p>
          <p className="text-[24px] font-extrabold italic leading-[36px]">
            {subText2}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
