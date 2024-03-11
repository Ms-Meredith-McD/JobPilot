import { useState, useEffect } from "react";
import useVerifyUser from "../hooks/useVerifyUser"
import Form from 'react-bootstrap/Form';

export default function Interview() {
const [interviewFollowUpData, setInterviewFollowUpData] = useState({});
const [formMessage, setFormMessage] = useState("");

const { isLoggedIn, userData } = useVerifyUser();


async function submitInterviewData(e) {
  e.preventDefault();
  console.log(interviewFollowUpData);
  try {
    //still needs to be setup with Alex's solution to grabbing users id
    const query = await fetch("/api/job/:id", {
      method: "PUT",
      body: JSON.stringify(interviewFollowUpData),
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
  setInterviewFollowUpData({ ...interviewFollowUpData, [e.target.name]: e.target.value });
}

useEffect(() => {
  userData && setInterviewFollowUpData({ ...interviewFollowUpData, user: userData._id });
  console.log(interviewFollowUpData);
}, [userData]);

  return (
    <>
    <Form className='resumeForm' onSubmit={submitInterviewData}>
    <Form.Group className="mb-3" id="thankYouCheck">
        <Form.Check
         type="checkbox"
         label="Thank you email Sent?"
         style={{color: "black"}}
         value={interviewFollowUpData?.sent || ""} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date of your interview</Form.Label>
        <Form.Control
         type="date"
         placeholder="Interview Date"
         name='date'
         aria-describedby='interviewDate'
         value={interviewFollowUpData?.date || ""}
         onChange={handleInputChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
         type="email"
         placeholder="Email of recipient"
         name='date'
         aria-describedby='thankYouEmail'
         value={interviewFollowUpData?.date || ""}
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
