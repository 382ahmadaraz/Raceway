import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import Home from "./pages/Home";
import Footer from "./components/ui/Footer";
function App() {
  return (
    <div className="bg-black">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
