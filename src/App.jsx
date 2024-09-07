import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Notification from "./components/layout/Notification";
import Home from "./pages/home/Home";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      <Header />
      <div className="container px-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Notification />
      </div>
      <Footer />
    </>
  );
}

export default App;
