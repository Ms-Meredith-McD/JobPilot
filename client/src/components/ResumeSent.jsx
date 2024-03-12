import { useState, useEffect } from "react";
import useVerifyUser from "../hooks/useVerifyUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ResumeSent(props) {
  const { resume } = props.trackerdata;
  const [resumeData, setResumeData] = useState({});
  const [formMessage, setFormMessage] = useState("");
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isLoggedIn, userData } = useVerifyUser();

  async function submitResumeData(e) {
    e.preventDefault();
    try {
      //still needs to be setup with Alex's solution to grabbing users id
      const query = await fetch(`/api/tracker/${props.tracker}`, {
        method: "PUT",
        body: JSON.stringify({
          resume: { date: resumeData.date, link: resumeData.link },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await query.json();
      if (result.status === "error") {
        setFormMessage("There was an issue submitting your resume data.");
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setFormMessage(
        "We regret that we were unable to sign you up. Please try again."
      );
    }
    handleClose();
  }

  function handleResumeChange(e) {
    setFormMessage();
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (userData && resume) {
      setResumeData({
        date: resume.date,
        link: resume.link,
        user: userData._id,
      });
      setSubmitted(true);
    }
  }, [userData, resume]);

  return (
    <>
      <Button
        className={submitted ? "green" : ""}
        variant="primary"
        onClick={handleShow}
      >
        Resume Sent
      </Button>

      <Modal {...props} size="lg" centered show={show} onHide={handleClose}>
        <Form className="resumeForm">
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Sent date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date"
              name="date"
              aria-describedby="resumeSentDate"
              value={resumeData.date}
              onChange={handleResumeChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="link">
            <Form.Label>Link</Form.Label>
            <Form.Control
              type="link"
              placeholder="Link"
              name="link"
              aria-describedby="resumeLink"
              value={resumeData.link}
              onChange={handleResumeChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitResumeData}>
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
