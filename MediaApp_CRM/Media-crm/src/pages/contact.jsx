// src/pages/Contact.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import BookingForm from '../components/BookingForm';

function Contact() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center mb-5">
        Fill out the form below to book a consultation with our team.
      </p>
      <BookingForm />
    </Container>
  );
}

export default Contact;
