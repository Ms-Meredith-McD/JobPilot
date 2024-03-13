import { useState, useEffect } from "react";
import useVerifyUser from "../hooks/useVerifyUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Note(props) {
  const { notes } = props.trackerdata;
  console.log("destructured data", props.trackerdata);

  const [noteData, setNoteData] = useState({ body: "" });
  console.log("state", noteData);

  const [formMessage, setFormMessage] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isLoggedIn, userData } = useVerifyUser();

  async function submitNote(e) {
    e.preventDefault();
    try {
      //still needs to be setup with Alex's solution to grabbing users id
      const query = await fetch(`/api/tracker/${props.tracker}`, {
        method: "PUT",
        body: JSON.stringify({ notes: noteData.body }),
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((err) => {
        setFormMessage(err, "There was an issue submitting your data.");
      });

      const result = await query.json();
      if (result.status === "error") {
        setFormMessage("There was an issue submitting your data.");
      } else {
      }
    } catch (err) {
      setFormMessage(
        "There was an issue submitting your data. Please try again"
      );
    }
    handleClose();
  }

  function handleInputChange(e) {
    setFormMessage("");
    setNoteData({
      ...noteData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (userData && notes) {
      setNoteData({
        body: notes,
        user: userData._id,
      });
    }
  }, [userData, notes]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Notes
      </Button>

      <Modal {...props} size="lg" centered show={show} onHide={handleClose}>
        <Form className="resumeForm">
          <Form.Group className="mb-3" controlId="formBasicNote">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Body"
              name="body"
              aria-describedby="noteBody"
              value={noteData.body}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitNote}>
            Submit
          </Button>
        </Form>

        {formMessage && formMessage.length > 0 && (
          <div className="row">
            <div className="col-12">{formMessage}</div>
          </div>
        )}
      </Modal>
    </>
  );
}
