import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookie from "js-cookie";

export default function useVerifyUser() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  function verifyUser() {
    const cookie = Cookie.get("auth_cookie");
    console.log('got cookie:', cookie);
    if (cookie && cookie.length) {
      console.log('before decode', cookie);
      const decodedToken = jwtDecode(cookie);
      console.log('decodedToken', decodedToken);
      setIsLoggedIn(true);
      setUserData(decodedToken.id);
    } else {
      console.log('else')
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