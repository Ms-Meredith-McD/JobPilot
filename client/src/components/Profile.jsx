import React, { useState, useContext, useEffect } from "react";
import { ProfileContext } from "../context/ProfileContext";
import Modal from "react-bootstrap/Modal";
import useVerifyUser from "../hooks/useVerifyUser";
import { FaUserAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PdfUpload from "./PdfUpload";

export default function Profile() {
  const { userProfile } = useContext(ProfileContext);
  const [show, setShow] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [uploadedFileName, setUploadedFileName] = useState(""); // State to store uploaded file name
  const { userData } = useVerifyUser();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handler to update profile data with uploaded resume URL
  const handleResumeUpload = (uploadedFileUrl, fileName) => {
    setProfileData({
      ...profileData,
      resumeFile: uploadedFileUrl, // Update the resume file URL in the state
    });
    setUploadedFileName(fileName); // Update the state with the uploaded file name
  };

  const submitProfileData = async (e) => {
    e.preventDefault();
    console.log(profileData);
    try {
      const query = await fetch(`/api/user/${userData._id}`, {
        method: "PUT",
        body: JSON.stringify({
          // resume: { date: resumeData.date, link: resumeData.link },
          profile: {
            portfolio: profileData.portfolio,
            github: profileData.github,
            linkedin: profileData.linkedin,
            elevator: profileData.elevator,
            resumeFile: profileData.resumeFile,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await query.json();
      console.log("result:", result);
    } catch (error) {
      console.log(error);
    }

    handleClose();
  };

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
    // console.log(profileData);
  };

  useEffect(() => {
    userProfile &&
      setProfileData({
        elevator: userProfile.elevator,
        github: userProfile.github,
        linkedin: userProfile.linkedin,
        portfolio: userProfile.portfolio,
      });
  }, [userProfile]);

  useEffect(() => {
    console.log("userdata:", userData);
  }, [userData]);

  return (
    <>
      <button className="profile__button" onClick={handleShow}>
        <FaUserAlt />
      </button>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Form className="profileForm">
          <h2>PROFILE</h2>

          <Form.Group>
            <Form.Label>Elevator Pitch</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Elevator Pitch"
              name="elevator"
              aria-describedby="profileElevatorPitch"
              value={profileData.elevator}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>GitHub</Form.Label>
            <Form.Control
              type="input"
              placeholder="Github"
              name="github"
              aria-describedby="profileGithub"
              value={profileData.github}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Portfolio</Form.Label>
            <Form.Control
              type="input"
              placeholder="Portfolio"
              name="portfolio"
              aria-describedby="profilePortfolio"
              value={profileData.portfolio}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>LinkedIn</Form.Label>
            <Form.Control
              type="input"
              placeholder="LinkedIn"
              name="linkedin"
              aria-describedby="profileLinkedIn"
              value={profileData.linkedin}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* file upload items below */}
          <Form.Group controlId="resume">
            <Form.Label>Upload Resume (PDF)</Form.Label>
            <PdfUpload handleResumeUpload={handleResumeUpload} />
            {uploadedFileName && <p>Uploaded File: {uploadedFileName}</p>}
          </Form.Group>
          <Form.Group>
            <Button
              className="button button--outline"
              // variant="primary"
              type="submit"
              onClick={submitProfileData}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
}

// export default Profile;
