import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Resume from "./pages/Resume";
import Jobs from "./pages/Jobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <div className="page-container">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
