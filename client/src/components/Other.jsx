import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export function Other() {
    // Grouping state as an object
    const [formState, setFormState] = useState({
        title: "",
        description: "",
        boolean: false,
    });
    function handleSubmit(e) {
        e.preventDefault();
        setUserMessage("submitted");
        setFormState({ title: "", description: "", boolean: "" });
    }

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
                        onBlur={handleValidation}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Control
                        type="String"
                        placeholder="Description"
                        value={formState.description}
                        name="description"
                        onChange={handleInputChange}
                        onBlur={handleValidation}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="completed">
                    <Form.Control
                       type="Boolean"
                        placeholder="Completed"
                        value={formState.completed}
                        name="completed"
                        onChange={handleInputChange}
                        onBlur={handleValidation}
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