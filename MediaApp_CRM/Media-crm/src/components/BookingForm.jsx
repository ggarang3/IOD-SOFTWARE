// src/components/BookingForm.jsx
import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";

function BookingForm() {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to API endpoint
      await axios.post("http://localhost:5001/api/inquiries", formData);
      setSubmitted(true); // Show confirmation message
      setError(null); // Clear any previous errors
      setFormData({ customer_name: "", customer_email: "", message: "" }); // Reset form
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {submitted && (
        <Alert
          variant="success"
          onClose={() => setSubmitted(false)}
          dismissible
        >
          Thank you! We will reach out promptly.
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="customer_name"
                value={formData.customer_name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="customer_email"
                value={formData.customer_email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Booking
        </Button>
      </Form>
    </>
  );
}

export default BookingForm;
