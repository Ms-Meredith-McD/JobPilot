import { useState } from "react";

function SignIn({ updateFormMessage }) {
  const [loginData, setLoginData] = useState({});

  async function submitLogin(e) {
    e.preventDefault();
    try {
      const query = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await query.json();
      console.log(result);

      if (result.status === "error") {
        updateFormMessage("We could not log you in with these credentials.");
      } else {
        window.location.href = "/jobs";
      }
    } catch (err) {
      updateFormMessage("We could not log you in with these credentials.");
    }
  }

  function handleLoginChange(e) {
    updateFormMessage();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h2>Log in</h2>
      <form className="loginForm" onSubmit={submitLogin}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={loginData?.email || ""}
              onChange={handleLoginChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={loginData?.password || ""}
              onChange={handleLoginChange}
            />
          </div>
          <div className=" form-check"></div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
export default SignIn;
