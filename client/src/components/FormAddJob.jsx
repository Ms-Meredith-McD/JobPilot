import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useVerifyUser from "../hooks/useVerifyUser";

function FormAddJob() {
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
      console.log(jobResult.payload._id);

      // Use the response from the first fetch request to make the second fetch request
      const newTracker = await fetch("/api/tracker", {
        method: "POST",
        body: JSON.stringify({ job: jobResult.payload._id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the second fetch request was successful
      if (newTracker.ok) {
        const trackerResult = await newTracker.json();
        console.log(trackerResult);
      } else {
        const errorData = await newTracker.json();
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      console.log(error);
    }

    // Reset the form state after submission
    setFormState(initialState);
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
