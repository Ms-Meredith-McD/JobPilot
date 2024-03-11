import useVerifyUser from "../hooks/useVerifyUser";

export default function Welcome() {
  const { isLoggedIn, userData } = useVerifyUser();
  console.log("userData at welcom", userData);

  const msg = isLoggedIn ? `, ${userData.username}!` : "";

  return (
    <>
      <div className="welcome mb-4">
        <h1 className="welcome__heading">{`Welcome to JobPilot${msg}`}</h1>
      </div>
    </>
  );
}
