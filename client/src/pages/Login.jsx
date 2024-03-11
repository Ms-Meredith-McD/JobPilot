import { useState } from "react";

export default function Login() {
  const [signupData, setSignupData] = useState({});
  const [loginData, setLoginData] = useState({});

  const [formMessage, setFormMessage] = useState("");

  async function submitSignup(e) {
    e.preventDefault();
    console.log("SIGN",signupData);
    try {
      const query = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(signupData),
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((err) => {
        setFormMessage(
          "We regret that we were unable to sign you up. Please try again."
        );
      });

      const result = await query.json();
      if (result.status === "error") {
        setFormMessage(
          "We regret that we were unable to sign you up. Please try again."
        );
      } else {
        window.location.href = "/";
      }
    } catch (err) {
      setFormMessage(
        "We regret that we were unable to sign you up. Please try again."
      );
    }
  }

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
      console.log(result)

      if (result.status === "error") {
        setFormMessage("We could not log you in with these credentials.");
      } else {
        window.location.href = "/jobs";
      }
    } catch (err) {
      setFormMessage("We could not log you in with these credentials.");
    }
  }

  function handleSignupChange(e) {
    setFormMessage();
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  }

  function handleLoginChange(e) {
    setFormMessage();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  return (
    <>
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

      <form className="loginForm" onSubmit={submitSignup}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              className="form-control"
              name="username"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              value={signupData?.username || ""}
              onChange={handleSignupChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={signupData?.email || ""}
              onChange={handleSignupChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={signupData?.password || ""}
              onChange={handleSignupChange}
            />
          </div>
          <div className=" form-check"></div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>

      {formMessage && formMessage.length > 0 && (
        <div className="row">
          <div className="col-12">{formMessage}</div>
        </div>
      )}
    </>
  );
}
