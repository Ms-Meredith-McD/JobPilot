import { useState, useEffect } from "react";
import useVerifyUser from "../hooks/useVerifyUser"
import Form from 'react-bootstrap/Form';

export default function Interview() {
const [interviewThanksData, setInterviewThanksData] = useState({});
const [formMessage, setFormMessage] = useState("");

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

useEffect(() => {
  userData && setInterviewThanksData({ ...interviewThanksData, user: userData._id });
  console.log(interviewThanksData);
}, [userData]);

  return (
    <>
    <Form className='resumeForm' onSubmit={submitInterviewData}>
    <Form.Group className="mb-3" id="thankYouCheck">
        <Form.Check type="checkbox" label="Thank you email Sent?" style={{color: "black"}} />
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
