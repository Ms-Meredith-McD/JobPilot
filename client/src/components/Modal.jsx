import { useState, Children, cloneElement } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function FormModal({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        {Children.map(children, (child) =>
          cloneElement(child, { handleClose: handleClose })
        )}
      </Modal>
    </>
  );
}

export default FormModal;
