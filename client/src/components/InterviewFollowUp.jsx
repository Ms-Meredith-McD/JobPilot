import { useState, useEffect } from "react";
import useVerifyUser from "../hooks/useVerifyUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function InterviewFollowUp(props) {
  const { interviewFollowUp } = props.trackerdata;
  const [interviewFollowUpData, setInterviewFollowUpData] = useState({});
  const [formMessage, setFormMessage] = useState("");
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isLoggedIn, userData } = useVerifyUser();

  async function submitInterviewData(e) {
    e.preventDefault();
    try {
      //still needs to be setup with Alex's solution to grabbing users id
      const query = await fetch(`/api/tracker/${props.tracker}`, {
        method: "PUT",
        body: JSON.stringify({
          interviewFollowUp: {
            date: interviewFollowUpData.date,
            email: interviewFollowUpData.email,
          },
        }),
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
        setSubmitted(true);
      }
    } catch (err) {
      setFormMessage(
        "There was an issue submitting your interview data. Please try again"
      );
    }
    handleClose();
  }

  function handleInputChange(e) {
    setFormMessage();
    setInterviewFollowUpData({
      ...interviewFollowUpData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (userData && interviewFollowUp) {
      setInterviewFollowUpData({
        date: interviewFollowUp.date,
        email: interviewFollowUp.email,
        user: userData._id,
      });
      setSubmitted(true);
    }
  }, [userData, interviewFollowUp]);

  return (
    <>
      <Button
        className={submitted ? "green" : ""}
        variant="primary"
        onClick={handleShow}
      >
        Interview Follow-Up
      </Button>

      <Modal {...props} size="lg" centered show={show} onHide={handleClose}>
        <Form className="resumeForm">
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date of your interview</Form.Label>
            <Form.Control
              type="date"
              placeholder="Interview Date"
              name="date"
              aria-describedby="interviewDate"
              value={interviewFollowUpData.date}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email of recipient"
              name="email"
              aria-describedby="thankYouEmail"
              value={interviewFollowUpData.email}
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
