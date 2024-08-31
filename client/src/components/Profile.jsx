import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import useVerifyUser from "../hooks/useVerifyUser";
import { FaUserAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { handleResumeUpload, handleCoverLetterUpload } from '../handlers/fileHandlers';

export default function Profile({ profile }) {
  const [userProfile, setUserProfile] = useState({ profile });
  const [show, setShow] = useState(false);
  const [profileData, setProfileData] = useState({});
  const { userData } = useVerifyUser();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // imported handlers with the setter function
  const resumeUpload = handleResumeUpload(setProfileData, profileData);
  const coverLetterUpload = handleCoverLetterUpload(setProfileData, profileData);

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
            coverLetterFile: profileData.coverLetterFile
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
    profile &&
      setProfileData({
        elevator: profile.elevator,
        github: profile.github,
        linkedin: profile.linkedin,
        portfolio: profile.portfolio,
      });
  }, [profile]);

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
            <Form.Label>Upload Resume (PDF DOC or DOCX)</Form.Label>
            <Form.Control
              type="file"
              placeholder="Resume"
              name="resume"
              aria-describedby="profileResume"
              value={profileData.resume}
              accept=".pdf,.docx, .doc"
              onChange={handleResumeUpload}
            />
          </Form.Group>
          <Form.Group controlId="coverLetter">
            <Form.Label>Upload Cover Letter (PDF DOC or DOCX)</Form.Label>
            <Form.Control
              type="file"
              placeholder="CoverLetter"
              name="coverletter"
              aria-describedby="profileCoverLetter"
              value={profileData.coverletter}
              accept=".pdf,.docx, .doc"
              onChange={handleCoverLetterUpload}
            />
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit" onClick={submitProfileData}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
}

// export default Profile;
