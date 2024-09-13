import { useState } from "react";

const SignUp = ({ updateFormMessage }) => {
  const [signupData, setSignupData] = useState({});

  async function submitSignup(e) {
    e.preventDefault();
    console.log("SIGN", signupData);
    try {
      const query = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(signupData),
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((err) => {
        updateFormMessage(
          err,
          "We regret that we were unable to sign you up. Please try again."
        );
      });

      const result = await query.json();
      if (result.status === "error") {
        updateFormMessage(
          "We regret that we were unable to sign you up. Please try again."
        );
      } else {
        window.location.href = "/";
      }
    } catch (err) {
      updateFormMessage(
        "We regret that we were unable to sign you up. Please try again."
      );
    }
  }

  function handleSignupChange(e) {
    updateFormMessage();
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  }
  return (
    <>
      <h2>Register</h2>
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
          <button type="submit" className="button button--signin-form">
            Create Account
          </button>
        </div>
      </form>
    </>
  );
};
export default SignUp;
