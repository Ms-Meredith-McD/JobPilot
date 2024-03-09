export default function Login() {
  return (
    <>
        <form className="loginForm">
          <div className="form-center">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
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
