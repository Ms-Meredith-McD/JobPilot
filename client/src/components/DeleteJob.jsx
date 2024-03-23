import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import React from "react";

const DeleteJob = ({ jobId, getJobs }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    console.log(jobId);
    try {
      const response = await fetch(`/api/job/${jobId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Handle successful deletion, e.g., show a success message or update the UI
        console.log("Job and tracker deleted successfully");
      } else {
        // Handle deletion error
        console.error("Failed to delete job and tracker");
      }
      handleClose();
      getJobs();
      navigate("/jobs");
    } catch (error) {
      console.error("Error deleting job and tracker:", error);
    }
  };

  return (
    <>
      <Button className="button--trash" onClick={handleShow}>
        <FaTrashCan />
      </Button>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Form className="delete-form">
          <Button size="lg" className="btn btn-danger" onClick={handleDelete}>
            Confirm Delete Job
          </Button>
          <CloseButton onClick={handleClose} />
        </Form>
      </Modal>
    </>
  );
};

export default DeleteJob;
