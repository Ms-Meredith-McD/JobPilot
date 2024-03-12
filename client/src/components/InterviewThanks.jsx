import { useState, useEffect } from "react";
import useVerifyUser from "../hooks/useVerifyUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function InterviewThanks(props) {
  const [interviewThanksData, setInterviewThanksData] = useState({});
  const [formMessage, setFormMessage] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isLoggedIn, userData } = useVerifyUser();

  async function submitInterviewData(e) {
    e.preventDefault();
    console.log(interviewThanksData);
    try {
      //still needs to be setup with Alex's solution to grabbing users id
      const query = await fetch("/api/job/:id", {
        method: "PUT",
        body: JSON.stringify(interviewThanksData),
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((err) => {
        setFormMessage(
          err,
          "There was an issue submitting your interview data."
        );
      });

      const result = await query.json();
      if (result.status === "error") {
        setFormMessage("There was an issue submitting your interview data.");
      } else {
        // window.location.href = "/";
      }
    } catch (err) {
      setFormMessage(
        "There was an issue submitting your interview data. Please try again"
      );
    }
  }

  function handleInputChange(e) {
    setFormMessage();
    setInterviewThanksData({
      ...interviewThanksData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    userData &&
      setInterviewThanksData({ ...interviewThanksData, user: userData._id });
    console.log(interviewThanksData);
  }, [userData]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Interview Thanks
      </Button>

      <Modal {...props} size="lg" centered show={show} onHide={handleClose}>
        <Form className="resumeForm">
          <Form.Group className="mb-3" id="thankYouCheck">
            <Form.Check
              type="checkbox"
              label="Thank you email Sent"
              style={{ color: "white" }}
              value={interviewThanksData?.sent || ""}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email of recipient"
              name="date"
              aria-describedby="thankYouEmail"
              value={interviewThanksData?.date || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitInterviewData}>
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
