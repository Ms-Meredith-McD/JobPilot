function Header() {
  return (
    <div className="d-flex">
      <nav className="navbar navbar-expand-lg navbar-dark w-100 p-2">
        <a className="navbar-brand" href="#">
          JobPilot
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-flex-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/jobs">
                My Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume">
                Resumes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
