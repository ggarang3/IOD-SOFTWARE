// src/pages/ServicesPage.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function ServicesPage() {
  // Sample data for services
  const services = [
    {
      title: "Enhanced Package",
      description:
        "45 min film, 90-second clip, 15 sec story edit, 25 edited image digital gallery.",
      price: "$1800",
    },
    {
      title: "Deluxe Package",
      description:
        "1 hr film, DJI 4K aerial film, 90-second clip, promo trailer edit, 15 sec story edit, 50 edited image gallery.",
      price: "$2500",
    },
    {
      title: "Prestige Package",
      description:
        "1.5 hrs film, DJI 4K aerial film, 2-minute clip, 30-second IG story, 100 image digital gallery.",
      price: "$2800",
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <Row>
        {services.map((service, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {service.price}
                </Card.Subtitle>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="primary" href="/contact">
                  Contact Us
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServicesPage;
