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
      <header>
        <Navbar collapseOnSelect expand="false" className="">
          {/* <Container> */}
          <Navbar.Brand className="header__title" href="/jobs">
            JobPilot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/jobs">My Jobs</Nav.Link>
              <Nav.Link href="/resumes">Resumes</Nav.Link>
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
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </header>
    </>
  );
}

export default Header;
