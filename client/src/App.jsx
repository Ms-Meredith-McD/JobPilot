import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Resources from "./pages/Resources";
import Jobs from "./pages/Jobs";
import Team from "./pages/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cookie from "js-cookie";
import useVerifyUser from "./hooks/useVerifyUser";

function App() {
  const { isLoggedIn, userData } = useVerifyUser();
  function verifyUser() {
    const cookie = Cookie.get("auth_cookie");
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
            <Route path="/resources" element={<Resources />} />
            <Route path="/jobs" element={isLoggedIn ? <Jobs /> : <Home />} />
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
