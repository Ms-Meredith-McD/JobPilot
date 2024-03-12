import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useVerifyUser from "../hooks/useVerifyUser";

function FormAddJob({ handleClose }) {
  // Very user is logged in, and get their data
  const { isLoggedIn, userData } = useVerifyUser();

  // Variable of the form data ******
  const initialState = {
    company: "",
    jobTitle: "",
    website: "",
    user: "",
  };
  const [formState, setFormState] = useState(initialState);
  const [userMessage, setUserMessage] = useState("");

  function handleInputChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setUserMessage("Submit successful");

    try {
      // Make the first fetch request to create a new job
      const jobResponse = await fetch("/api/job", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Parse the response from the first fetch request
      const jobResult = await jobResponse.json();
      const { newJob, newTracker } = jobResult.payload;
    } catch (error) {
      console.log(error);
    }

    // Reset the form state after submission
    setFormState(initialState);
    handleClose();
  }

  useEffect(() => {
    userData && setFormState({ ...formState, user: userData._id });
    console.log(formState);
  }, [userData]);

  return (
    <>
      <Form>
        {/* make sure controlId, name, value are correct; placeholder** */}
        <Form.Group className="mb-3" controlId="company">
          <Form.Control
            type="input"
            placeholder="Company"
            value={formState.company}
            name="company"
            onChange={handleInputChange}
            // onBlur={handleValidation}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="jobTitle">
          <Form.Control
            type="input"
            placeholder="Job Title"
            value={formState.jobTitle}
            name="jobTitle"
            onChange={handleInputChange}
            // onBlur={handleValidation}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="website">
          <Form.Control
            type="input"
            placeholder="Link"
            value={formState.website}
            name="website"
            onChange={handleInputChange}
            // onBlur={handleValidation}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        {userMessage && <h5 className="error-msg">{userMessage}</h5>}
      </Form>
    </>
  );
}

export default FormAddJob;
