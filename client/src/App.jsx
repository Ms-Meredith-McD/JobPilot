import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Resume from "./pages/Resume";
import Jobs from "./pages/Jobs";
import Team from "./pages/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Cookie from "js-cookie";

function App() {
  function verifyUser() {
    const cookie = Cookie.get("auth_cookie");
    console.log(cookie);
  }

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <>
      <div className="page-container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
