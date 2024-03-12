import { useState, useEffect } from "react";
import useVerifyUser from "../hooks/useVerifyUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Add(props) {
    const { addDate } = props.trackerdata;
    console.log("destructured data", props.trackerdata);
    const [addData, setAddData] = useState({});
    console.log("state", addData);
    const [formMessage, setFormMessage] = useState("");
    const [show, setShow] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { isLoggedIn, userData } = useVerifyUser();

    async function submitAddData(e) {
        e.preventDefault();
        try {
            //still needs to be setup with Alex's solution to grabbing users id
            const query = await fetch(`/api/tracker/${props.tracker}`, {
                method: "PUT",
                body: JSON.stringify({ addDate: addData.date }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).catch((err) => {
                setFormMessage(
                    err,
                    "There was an issue submitting your add data."
                );
            });

            const result = await query.json();
            if (result.status === "error") {
                setFormMessage("There was an issue submitting your add data.");
            } else {
                setSubmitted(true);
            }
        } catch (err) {
            setFormMessage(
                "There was an issue submitting your add data. Please try again"
            );
        }
        handleClose();
    }

    function handleAddChange(e) {
        setFormMessage();
        setAddData({ ...addData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (userData && addDate) {
            setAddData({ date: addDate, user: userData._id });
            console.log("addData", addData);
            setSubmitted(true);
        }
    }, [userData, addDate]);

    return (
        <>
            <Button
                className={submitted ? "green" : ""}
                variant="primary"
                onClick={handleShow}
            >
                +
            </Button>

            <Modal {...props} size="lg" centered show={show} onHide={handleClose}>
                <Form className="resumeForm">
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            name="title"
                            aria-describedby="addTitle"
                            value={addData.title}
                            onChange={handleAddChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Description"
                            name="body"
                            aria-describedby="addDescription"
                            value={addData.description}
                            onChange={handleAddChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={submitAddData}>
                        Submit
                    </Button>
                </Form>

                {formMessage && formMessage.length > 0 && (
                    <div className="row">
                        <div className="col-12">{formMessage}</div>
                    </div>
                )}
            </Modal>
        </>
    );
}
