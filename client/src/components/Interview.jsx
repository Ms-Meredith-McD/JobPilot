import { useState } from "react";
import Form from 'react-bootstrap/Form';

export default function Interview() {
const [interviewData, setInterviewData] = useState({});
const [formMessage, setFormMessage] = useState("");

async function submitInterviewData(e) {
  e.preventDefault();
  console.log(interviewData);
  try {
    //still needs to be setup using alex's hook
    const query = await fetch("/api/job/:id", {
      method: "PUT",
      body: JSON.stringify(interviewData),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      setFormMessage(
        err, "There was an issue submitting your interview data."
      );
    });

    const result = await query.json();
    if (result.status === "error") {
      setFormMessage(
        "There was an issue submitting your interview data."
      );
    } else {
      // window.location.href = "/";
    }
  } catch (err) {
    setFormMessage(
      "There was an issue submitting your interview data. Please try again"
    );
  }
}

function handleInterviewChange(e) {
  setFormMessage();
  setInterviewData({ ...interviewData, [e.target.name]: e.target.value });
}

  return (
    <>
    <Form className='resumeForm' onSubmit={submitInterviewData}>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date of your interview</Form.Label>
        <Form.Control
         type="date"
         placeholder="Date"
         name='date'
         aria-describedby='interviewDate'
         value={interviewData?.date || ""}
         onChange={handleInterviewChange} />
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
