import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import Home from "./pages/Home";
import Footer from "./components/ui/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
