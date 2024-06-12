import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function UserFiles({ userData }) {
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const submitResume = async (e) => {
    e.preventDefault();
    console.log("resumeFile", resumeFile);
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({
          resumeFile,
          userId: userData._id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      console.log("result:", result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form>
      <Form.Group controlId="resume">
        <Form.Label>Upload Resume (PDF DOC or DOCX)</Form.Label>
        <Form.Control
          type="file"
          placeholder="Resume"
          name="resume"
          aria-describedby="profileResume"
          accept=".pdf,.docx, .doc"
          onChange={(e) => handleFileChange(e, setResumeFile)}
        />
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit" onClick={submitResume}>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default UserFiles;
