import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { FaUserAlt } from "react-icons/fa";

const Profile = ({ profile }) => {
  const [userProfile, setUserProfile] = useState({ profile });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <button className="profile__button" onClick={handleShow}>
      <FaUserAlt />
      </button>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <h2>PROFILE</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec accumsan felis. Proin eget augue dui. Suspendisse ullamcorper, nulla sed pellentesque porttitor, tellus enim maximus neque
        </p>
      </Modal>
    </>
  );
};

export default Profile;
