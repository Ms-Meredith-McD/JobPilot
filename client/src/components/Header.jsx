import useVerifyUser from "../hooks/useVerifyUser";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const { isLoggedIn, logout } = useVerifyUser();
  return (
    <>
      <div className="d-flex">
        <nav className="navbar navbar-expand-lg navbar-dark w-100 p-2">
          <Link className="navbar-brand" to="/">
            JobPilot
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-flex-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/jobs">
                  My Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">
                  Resumes
                </Link>
              </li>
              <li className="nav-item">
                {isLoggedIn === true ? (
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={logout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link type="button" className="btn btn-light" to="/login">
                    Login or signup please!
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default OffcanvasExample;

function OffcanvasExample() {
  const { isLoggedIn, logout } = useVerifyUser();

  return (
    <>
      <div className="d-flex">
        <Navbar className="navbar navbar-dark w-100 p-2 mb-3" expand={false}>
          <Container fluid>
            <Navbar.Brand>
              <Link className="navbar-brand" to="/">
                JobPilot
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/jobs">
                      My Jobs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/resume">
                      Resumes
                    </Link>
                  </li>
                  <li className="nav-item">
                    {isLoggedIn === true ? (
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    ) : (
                      <Link type="button" className="btn btn-light" to="/login">
                        Login or signup please!
                      </Link>
                    )}
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
