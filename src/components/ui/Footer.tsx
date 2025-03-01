import { Link } from "react-router-dom";
const Useful_Links = [
  {
    toSTxt: "Mission & Vision",
    toSUrl: "/mission",
  },
  {
    toSTxt: "FAQs",
    toSUrl: "/faq",
  },
  {
    toSTxt: "Terms & Conditions",
    toSUrl: "/term",
  },
  {
    toSTxt: "Contact Us",
    toSUrl: "/contact-us",
  },
];
const Series = [
  {
    seriestxt: "About UAE RMC",
    seriesUrl: "/about-us",
  },
];
const Media = [
  {
    mediaText: "News",
    mediaUrl: "/news",
  },
  {
    mediaText: "Gallery",
    mediaUrl: "/gallery",
  },
  {
    mediaText: "Videos",
    mediaUrl: "/videos",
  },
  {
    mediaText: "Links",
    mediaUrl: "/link",
  },
];
const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto p-4 sm:px-8 xl:px-20 2xl:px-40 lg:flex">
        <div className="lg:w-2/5">
          <div className="Logo_Content text-[#ffffff]">
            <img
              className="w-[130px] max-w-[130px]"
              src={"/image/logo.png"}
              alt="Footer_Logo"
            />
            <p className="text-sm font-medium text-justify py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              nobis. Numquam laboriosam, provident enim totam quod fugiat
              tenetur iste ratione dolore amet vitae facilis recusandae eum rem
              nobis officia minus nostrum mollitia quasi, cupiditate aliquam
              sapiente. Ut doloribus magni quaerat, cum, nihil deserunt beatae
              necessitatibus omnis ab sint corporis assumenda.
            </p>
          </div>
          <div className="Social_Links flex gap-x-4 justify-center lg:justify-start">
            {[
              "/favicon/facebook.svg",
              "/favicon/instagram.svg",
              "/favicon/twitter.svg",
            ].map((icon, index) => {
              return <img key={index} src={icon} alt="social-icon" />;
            })}
          </div>
        </div>
        <div className="Links py-4 sm:flex justify-around lg:w-[60%]">
          <div className="text-[#ffffff] py-4">
            <div className="italic text-lg font-bold">Useful Links</div>
            <ul>
              {Useful_Links.map((item, i) => {
                return (
                  <li key={i}>
                    <div className="flex items-center gap-x-2 py-1">
                      <img src={"/favicon/red-vector.svg"} alt="vector-icon" />
                      <Link className="text-sm font-medium" to={item?.toSUrl}>
                        {item?.toSTxt}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-[#ffffff] py-4">
            <div className="italic text-lg font-bold">The Series</div>
            <ul>
              {Series.map((item, i) => {
                return (
                  <li key={i}>
                    <div className="flex items-center gap-x-2 py-1">
                      <img src={"/favicon/red-vector.svg"} alt="vector-icon" />
                      <Link
                        className="text-sm font-medium"
                        to={item?.seriesUrl}
                      >
                        {item?.seriestxt}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-[#ffffff] py-4">
            <div className="italic text-lg font-bold">Media</div>
            <ul>
              {Media.map((item, i) => {
                return (
                  <li key={i}>
                    <div className="flex items-center gap-x-2 py-1">
                      <img src={"/favicon/red-vector.svg"} alt="vector-icon" />
                      <Link className="text-sm font-medium" to={item?.mediaUrl}>
                        {item?.mediaText}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="Footer_Description h-12 p-4 flex justify-center items-center bg-[#101010]">
        <p className="text-[.65rem] sm:text-sm font-normal leading-5 text-[#ffffff]">
          © Copyright2024 Al Ain Raceway | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
