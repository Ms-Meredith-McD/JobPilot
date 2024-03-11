import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function  Other() {

    function otherData () {
    // Grouping state as an object

    const [formState, setFormState] = useState("");({
        title: "",
        description: "",
        boolean: false,
    });

    const [userMessage, setUserMessage] = useState("");

    function handleInputChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setUserMessage("Submit successful");

        try {
            const query = await fetch("/api/other", {
                method: "PUT",
                body: JSON.stringify(formState),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await query.json;
            console.log(formState);
        } catch (error) {
            console.log(error);
        }

        setFormState(initialState);
    }

    useEffect(() => {
        userData && setFormState({ ...formState, user: userData._id });
        console.log(formState);
    }, [userData]);

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Control
                        type="String"
                        placeholder="Title"
                        value={formState.title}
                        name="title"
                        onChange={handleInputChange}
                        // onBlur={handleValidation}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Control
                        type="String"
                        placeholder="Description"
                        value={formState.description}
                        name="description"
                        onChange={handleInputChange}
                        // onBlur={handleValidation}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="completed">
                    <Form.Control
                        type="Boolean"
                        placeholder="Completed"
                        value={formState.completed}
                        name="completed"
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
}

