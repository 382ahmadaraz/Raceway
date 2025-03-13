import Banner from "../components/common/Banner";

export default function Media() {
  return (
    <>
    <Banner text={"Media"} showBackground={true} showBorder={true} />
    <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "linear-gradient(#000000CC, #000000CC), url(/image/background1.png)"}}>
     <div className="arw-container flex flex-col justify-center items-center gap-5">
     {["/image/facebook.png" , "image/instagram.png" , "/image/twitter.png"].map((item,index)=> {
        return (
            <img src={item} alt={item} />
        )
     })}
     </div>
    </div>
    </>
  );
};
