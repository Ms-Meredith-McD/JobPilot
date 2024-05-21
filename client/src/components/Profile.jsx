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
          Hi, my name is Meredith and I like Molasses. My husband's name is Ryan and he likes Rice.
        </p>
      </Modal>
    </>
  );
};

export default Profile;
