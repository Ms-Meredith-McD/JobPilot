import { useState, useEffect } from "react";
import useVerifyUser from "../hooks/useVerifyUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Interview(props) {
  const { interviewDate } = props.trackerdata;
  const [interviewData, setInterviewData] = useState({});
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
        body: JSON.stringify({ interviewDate: interviewData.date }),
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

  function handleInterviewChange(e) {
    setFormMessage();
    setInterviewData({ ...interviewData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (userData && interviewDate) {
      setInterviewData({ date: interviewDate, user: userData._id });
      console.log("interviewData", interviewData);
      setSubmitted(true);
    }
  }, [userData, interviewDate]);

  return (
    <>
      <Button
        className={submitted ? "green" : ""}
        variant="primary"
        onClick={handleShow}
      >
        Interview Date
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
              value={interviewData.date}
              onChange={handleInterviewChange}
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
