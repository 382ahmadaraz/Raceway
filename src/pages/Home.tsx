import Calender from "../components/home/Calender";
import Header from "../components/home/Header";
import LiveButton from "../components/home/LiveButton";
import Main from "../components/home/Main";
import Partners from "../components/home/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <LiveButton />
      <Calender />
      <Partners />
    </>
  );
}
