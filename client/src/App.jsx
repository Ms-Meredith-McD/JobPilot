import { useContext, useEffect } from "react";
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
import { ProfileContext } from "./context/ProfileContext";

function App() {
  const { userProfile, setUserProfile } = useContext(ProfileContext);
  const { isLoggedIn, userData } = useVerifyUser();
  function verifyUser() {
    const cookie = Cookie.get("auth_cookie");
  }

  async function getProfile() {
    try {
      const profile = await fetch(`/api/user/${userData._id}`);
      const { payload } = await profile.json();
      setUserProfile(payload.profile);
      console.log(userProfile);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    verifyUser();
  }, []);

  useEffect(() => {
    if (userData) getProfile();
  }, [userData]);

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
