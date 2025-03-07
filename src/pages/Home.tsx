import Head from "../components/home/Head";
import Main from "../components/home/Main";
import LiveButton from "../components/home/LiveButton";
import Calender from "../components/common/Banner";
import Partners from "../components/home/Partners";
import CardHome from "../components/home/Card";

export default function Home() {
  return (
    <>
      <Head />
      <Main />
      <LiveButton />
      <Calender />
      <CardHome />
      <Partners />
    </>
  );
}
