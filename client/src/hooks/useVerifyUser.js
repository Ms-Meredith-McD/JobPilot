import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookie from "js-cookie";

export default function useVerifyUser() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  function verifyUser() {
    const cookie = Cookie.get("auth_cookie");
    if (cookie && cookie.length) {
      const decodedToken = jwtDecode(cookie);
      setIsLoggedIn(true);
      setUserData(decodedToken.id);
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  }

  async function logout() {
    const remove = await fetch("/api/user/logout", {
      method: "POST",
      body: "",
      headers: { 'Content-Type': 'application/json' }
    })
    const result = await remove.json()
    if (result?.status === "success") {
      window.location.href = "/"
    }
  }

  // Whenever this hook loads, run the verifyUser function, and update state
  useEffect(() => {
    verifyUser()
  }, [])

  // I am making the state of whether the user is logged in available from this hook
  return {
    isLoggedIn,
    logout,
    userData
  }

}