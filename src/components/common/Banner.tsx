import Button from "./Button";

interface BannerProps {
  bannerText?: string;
  showButtons?: boolean;
  showDropdown?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showBorder?: boolean;
  isShow?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  bannerText = "",
  showButtons = false,
  showDropdown = false,
  primaryButtonText,
  secondaryButtonText,
  showBorder = false,
  isShow = true,
}) => {
  return (
    <section
      className="bg-contain bg-center lg:h-32 lg:bg-no-repeat"
      style={{
        backgroundImage: isShow ? "url(/image/bgCalender.png)" : "none",
      }}
      aria-label="Banner Section"
    >
      <div className="arw-container flex flex-col lg:flex-row lg:justify-between gap-x-2 gap-y-4 lg:gap-y-0 py-4 lg:py-11 items-center p-4 sm:px-8 xl:px-20 2xl:px-40">
        <div>
          {showButtons ? (
            <div className="flex gap-x-4">
              {primaryButtonText && (
                <Button
                  type="button"
                  text={primaryButtonText}
                  customButtonStyle="btn btn-primary text-white"
                />
              )}
              {secondaryButtonText && (
                <Button
                  type="button"
                  text={secondaryButtonText}
                  customButtonStyle="btn btn-secondary text-white"
                />
              )}
            </div>
          ) : (
            <p className="text-xl font-bold italic whitespace-nowrap text-white sm:text-2xl md:text-3xl">
              {bannerText}
            </p>
          )}
        </div>

        {showDropdown && (
          <div className="flex items-center gap-x-2">
            <label htmlFor="season-select" className="text-white">
              Select Season:
            </label>
            <select
              id="season-select"
              className="p-2 border rounded-md bg-white text-black"
              aria-label="Select Season"
            >
              <option>UAE ROTAX MAX 23/24</option>
              <option>UAE ROTAX MAX 23/24</option>
              <option>UAE ROTAX MAX 23/24</option>
            </select>
            <Button
              type="button"
              text="Go"
              customButtonStyle="p-2 ml-2 text-[18px] font-[600] rounded-[6px]"
            />
          </div>
        )}
      </div>
      {showBorder && <div className="red-border" aria-hidden="true"></div>}
    </section>
  );
};

export default Banner;
