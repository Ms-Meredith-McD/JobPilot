import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import useVerifyUser from "../hooks/useVerifyUser"

export default function Other(props) {
    const [otherData, setOtherData] = useState(props.otherData);

    const [formMessage, setFormMessage] = useState("");

    const { isLoggedIn, userData } = useVerifyUser();

    async function submitOtherData(e) {
        e.preventDefault();
        console.log(otherData);
        try {
            //still needs to be setup with Alex's solution to grabbing users id (copied this from Riley's file)
            const query = await fetch("/api/job/:id", {
                method: "PUT",
                body: JSON.stringify(otherData),
                headers: {
                    "Content-Type": "application/json",
                },
            }).catch((err) => {
                setFormMessage(
                    err, "There was an issue creating your task."
                );
            });

            const result = await query.json();
            if (result.status === "error") {
                setFormMessage(
                    "There was an issue creating your task."
                );
            } else {
                // window.location.href = "/";
            }
        } catch (err) {
            setFormMessage(
                "We regret that we were unable to sign you up. Please try again."
            );
        }
    }

    function handleOtherChange(e) {
        setFormMessage();
        setOtherData({ ...otherData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        userData && setOtherData({ ...otherData, user: userData._id });
        console.log(otherData);
    }, [userData]);

    return (
        <>
            <Form className='otherForm' onSubmit={submitOtherData}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        name='title'
                        aria-describedby='otherTitle'
                        value={otherData?.title || ""}
                        onChange={handleOtherChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Description"
                        name='description'
                        aria-describedby='otherDescription'
                        value={otherData?.description || ""}
                        onChange={handleOtherChange} />
                </Form.Group>
                <Form.Group className="mb-3" id="otherCheck">
                    <Form.Check
                        type="checkbox"
                        label="Complete"
                        style={{ color: "white" }}
                        value={otherData?.complete || ""}
                    />
                </Form.Group>
            </Form>

            {formMessage && formMessage.length > 0 && (
                <div className="row">
                    <div className="col-12">{formMessage}</div>
                </div>
            )}
        </>
    );
}

