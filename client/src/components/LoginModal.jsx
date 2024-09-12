import { useState, Children, cloneElement } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

function LoginModal({ btnStyle }) {
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleClose = () => {
    setShow(false);
    setNewUser(false);
  };
  const handleShow = () => setShow(true);
  const updateFormMessage = (content) => setFormMessage(content);

  return (
    <>
      <button className={btnStyle} onClick={handleShow}>
        Sign In
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
        <div>
          {newUser ? (
            <>
              <p>Already a member?</p>
              <Link
                type="button"
                className="btn btn-light"
                onClick={() => setNewUser(!newUser)}
              >
                Let me log in!
              </Link>
            </>
          ) : (
            <>
              <p>Create a new account?</p>
              <Link
                type="button"
                className="btn btn-light"
                onClick={() => setNewUser(!newUser)}
              >
                Sign Me Up!
              </Link>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
export default LoginModal;
