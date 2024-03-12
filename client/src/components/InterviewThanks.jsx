import { useState, useEffect } from "react";
import useVerifyUser from "../hooks/useVerifyUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function InterviewThanks(props) {
  const { interviewThankYou } = props.trackerdata;

  const [interviewThanksData, setInterviewThanksData] = useState({});
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
          interviewThankYou: {
            date: interviewThanksData.date,
            email: interviewThanksData.email,
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
    setInterviewThanksData({
      ...interviewThanksData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (userData && interviewThankYou) {
      setInterviewThanksData({
        date: interviewThankYou.date,
        email: interviewThankYou.email,
        user: userData._id,
      });
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }, [userData, interviewThankYou]);

  return (
    <>
      <Button
        className={submitted ? "green" : ""}
        variant="primary"
        onClick={handleShow}
      >
        Interview Thanks
      </Button>

      <Modal {...props} size="lg" centered show={show} onHide={handleClose}>
        <Form className="resumeForm">
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Sent date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date"
              name="date"
              aria-describedby="thankYouDate"
              value={interviewThanksData.date}
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
              value={interviewThanksData.email}
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
