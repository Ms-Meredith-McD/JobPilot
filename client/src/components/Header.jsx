import useVerifyUser from "../hooks/useVerifyUser";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { RiLogoutBoxLine } from "react-icons/ri";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Profile from "./Profile";
import LoginModal from "./LoginModal";

function Header() {
  const { isLoggedIn, logout } = useVerifyUser();
  return (
    <>
      <header>
        <Navbar collapseOnSelect fixed="top" expand="false" className="">
          {/* <Container> */}
          <Navbar.Brand className="header__title" href="/jobs">
            JobPilot
          </Navbar.Brand>
          {isLoggedIn && <Profile />}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/jobs">My Jobs</Nav.Link>
              <Nav.Link href="/resources">Resources</Nav.Link>
              {isLoggedIn === true ? (
                <button
                  type="button"
                  className="button button--login"
                  onClick={logout}
                >
                  Logout <RiLogoutBoxLine />
                </button>
              ) : (
                // <Link type="button" className="btn btn-light" to="/login">
                //   Login or signup please!
                // </Link>
                <LoginModal />
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
