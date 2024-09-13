import { useState, Children, cloneElement } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { RiLoginBoxLine } from "react-icons/ri";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

function LoginModal({ btnStyle }) {
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleClose = () => {
    setShow(false);
    setNewUser(false);
    setFormMessage("");
  };
  const handleShow = () => setShow(true);
  const updateFormMessage = (content) => setFormMessage(content);

  const redirect = () => {
    setNewUser(!newUser);
    setFormMessage("");
  };

  return (
    <>
      <button className="button button--login" onClick={handleShow}>
        Sign In <RiLoginBoxLine />
      </button>

      <Modal show={show} onHide={handleClose}>
        {newUser ? (
          <SignUp updateFormMessage={updateFormMessage} />
        ) : (
          <SignIn updateFormMessage={updateFormMessage} />
        )}
        {formMessage && formMessage.length > 0 && (
          <div className="row">
            <div className="col-12">{formMessage}</div>
          </div>
        )}
        <div className="submit-button">
          <Link className="button--outline" onClick={redirect}>
            {newUser ? "I'm already a member!" : "Create an account"}
          </Link>
        </div>
      </Modal>
    </>
  );
}
export default LoginModal;
