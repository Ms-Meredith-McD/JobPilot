import { useEffect, useState } from "react"
import Cookie from "js-cookie";

/* 

  Writing your own React hook:

  React hooks are just one or more functions that can be imported to any component
  that needs them. Think of a hook as a function which exports out other functions 
  that it wants to share with other components.

  We know that we may have several parts of our web site that need to verify if 
  the user is logged in. So let's create a hood for that!
*/

export default function useVerifyUser() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  /* any functions we want other components to have get placed before the return statement */




  /* this is the same function used in App.jsx for the most part, but now we can share it! */
  function verifyUser() {
    const cookie = Cookie.get("auth_cookie")
    setIsLoggedIn(cookie && cookie.length ? true : false)
    // return ( cookie ) ? true : false
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
    logout
  }

}