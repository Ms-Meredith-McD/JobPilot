import useVerifyUser from "../hooks/useVerifyUser";
import { jwtDecode } from "jwt-decode";

export default function Welcome() {
  const { isLoggedIn, logout } = useVerifyUser();

  // const token = localStorage.getItem("token");
  // console.log("token: ", token);
  // const decodedToken = jwtDecode(token);
  // const username = decodedToken.username;
  // const userName = isLoggedIn === true ? ` ${username}` : "";

  const msg = isLoggedIn ? " logged in" : " not logged in";

  return (
    <>
      <div className="welcome mb-4">
        <h1 className="welcome__heading">{`Welcome to JobPilot${msg}`}</h1>
      </div>
    </>
  );
}
