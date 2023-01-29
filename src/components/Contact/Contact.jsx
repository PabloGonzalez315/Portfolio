import React, { useState } from "react";
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/send-email.php", {
            method: "POST",
            body: JSON.stringify(formData),
        })
            .then((res) => res.text())
            .then((response) => {
                console.log("Success:", response);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <Container fluid className="about-section">
            <Container>
                <Form onSubmit={handleSubmit} className="ms-auto">
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            ClassName="inputform"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control type="text" name="subject" value={formData.subject} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button type="submit">Enviar</Button>
                </Form>
            </Container>
        </Container>
    );
};

export default Contact;
