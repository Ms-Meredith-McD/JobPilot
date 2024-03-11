import { useState } from "react";
import Form from 'react-bootstrap/Form';

export default function Interview() {
const [interviewThanksData, setInterviewThanksData] = useState({});
const [formMessage, setFormMessage] = useState("");

async function submitInterviewData(e) {
  e.preventDefault();
  console.log(interviewThanksData);
  try {
    //still needs to be setup using alex's hook
    const query = await fetch("/api/job/:id", {
      method: "PUT",
      body: JSON.stringify(interviewThanksData),
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

function handleInputChange(e) {
  setFormMessage();
  setInterviewThanksData({ ...interviewThanksData, [e.target.name]: e.target.value });
}

  return (
    <>
    <Form className='resumeForm' onSubmit={submitInterviewData}>
    <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Sent?" style={{color: "black"}} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
         type="email"
         placeholder="Email of recipient"
         name='date'
         aria-describedby='thankYouEmail'
         value={interviewThanksData?.date || ""}
         onChange={handleInputChange} />
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
