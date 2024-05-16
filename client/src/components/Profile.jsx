import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";

const Profile = ({ profile }) => {
  const [userProfile, setUserProfile] = useState({ profile });

  const handleShow = function () {
    console.log(userProfile);
  };

  return (
    <>
      <Button className="profile__button" onClick={handleShow}>
        ME
      </Button>
      <Modal>
        <h2>PROFILE</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          mollitia eaque harum atque eligendi eos voluptas saepe. Blanditiis,
          assumenda expedita esse corporis adipisci aperiam? Magnam doloremque
          commodi totam necessitatibus ab?
        </p>
      </Modal>
    </>
  );
};

export default Profile;
