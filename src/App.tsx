import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import Home from "./pages/Home";
import RaceCalendar from "./pages/RaceCalendar";
import DriverProfile from "./pages/DriverProfile";
import Downloads from "./pages/Downloads";
import Footer from "./components/ui/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/race-calendar" element={<RaceCalendar />} />
          <Route path="/driver-profile" element={<DriverProfile />} />
          <Route path="/download" element={<Downloads />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
