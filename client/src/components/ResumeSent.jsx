import { useState, useEffect } from "react";
import useVerifyUser from "../hooks/useVerifyUser"
import Form from 'react-bootstrap/Form';

export default function ResumeSent() {
const [resumeData, setResumeData] = useState({});
const [formMessage, setFormMessage] = useState("");

const { isLoggedIn, userData } = useVerifyUser();

async function submitResumeData(e) {
  e.preventDefault();
  console.log(resumeData);
  try {
    //still needs to be setup with Alex's solution to grabbing users id
    const query = await fetch("/api/job/:id", {
      method: "PUT",
      body: JSON.stringify(resumeData),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      setFormMessage(
        err, "There was an issue submitting your resume data."
      );
    });

    const result = await query.json();
    if (result.status === "error") {
      setFormMessage(
        "There was an issue submitting your resume data."
      );
    } else {
      // window.location.href = "/";
    }
  } catch (err) {
    setFormMessage(
      "We regret that we were unable to sign you up. Please try again."
    );
  }
}

function handleResumeChange(e) {
  setFormMessage();
  setResumeData({ ...resumeData, [e.target.name]: e.target.value });
}

useEffect(() => {
  userData && setResumeData({ ...resumeData, user: userData._id });
  console.log(resumeData);
}, [userData]);

  return (
    <>
    <Form className='resumeForm' onSubmit={submitResumeData}>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Sent date</Form.Label>
        <Form.Control
         type="date"
         placeholder="Date"
         name='date'
         aria-describedby='resumeSentDate'
         value={resumeData?.date || ""}
         onChange={handleResumeChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="link">
        <Form.Label>Link</Form.Label>
        <Form.Control
         type="link"
         placeholder="Link"
         name='link'
         aria-describedby='resumeLink'
         value={resumeData?.link || ""}
         onChange={handleResumeChange} />
      </Form.Group>
    </Form>

    {formMessage && formMessage.length > 0 && (
        <div className="row">
          <div className="col-12">{formMessage}</div>
        </div>
      )}
    </>
  );
}
