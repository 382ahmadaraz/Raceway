import Header from "../components/home/Header";
import Main from "../components/home/Main";
import LiveButton from "../components/home/LiveButton";
import Calender from "../components/common/Banner";
import Partners from "../components/home/Partners";
import CardHome from "../components/home/Card";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <LiveButton />  
      <Calender />
      <CardHome />
      <Partners />
    </>
  );
}
