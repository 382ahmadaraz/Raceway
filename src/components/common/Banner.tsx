interface BannerProps {
  text?: string;
  showButtons?: boolean;
  buttonText1?: string;
  buttonText2?: string;
}

const Banner: React.FC<BannerProps> = ({
  text,
  showButtons = false,
  buttonText1,
  buttonText2,
}) => {
  return (
    <div
      className="bg-contain bg-center lg:h-32 lg:bg-no-repeat"
      style={{ backgroundImage: `url(/image/bgCalender.png)` }}
    >
      <div className="arw-container flex gap-x-2 py-4 lg:py-11 items-center p-4 sm:px-8 xl:px-20 2xl:px-40">
        {showButtons ? (
          <div className="flex gap-x-4">
            {buttonText1 && (
              <button className="btn btn-primary text-white">
                {buttonText1}
              </button>
            )}
            {buttonText2 && (
              <button className="btn btn-secondary text-white">
                {buttonText2}
              </button>
            )}
          </div>
        ) : (
          <p className="text-xl font-bold italic whitespace-nowrap text-white sm:text-2xl md:text-3xl">
            {text}
          </p>
        )}
        <div className="red-border"></div>
      </div>
    </div>
  );
};

export default Banner;
