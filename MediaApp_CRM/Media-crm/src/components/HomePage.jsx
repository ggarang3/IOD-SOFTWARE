
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import introVideo from "../assets/videos/intro.mp4";
import sampleImage from "../assets/images/sample-image.jpg";

function HomePage() {
  return (
    <>
      {/* Full-width container for the video */}
      <div className="media-container">
        <video autoPlay loop muted className="media-content">
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content with Image */}
      <Container className="mt-5">
        <Row className="align-items-center">
          {/* Large Image on the Left */}
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img src={sampleImage} alt="Sample" className="large-image" />
          </Col>

          {/* Text */}
          <Col xs={12} md={6} className="text-start">
            <h2>You're just One Click from Your Media Solutions</h2>
            <p>
              Media Pulse is your partner in navigating the fast-paced world of
              media and content creation. From branding to digital strategy, we
              offer streamlined solutions that cater to your unique needs. Our
              goal is to empower your business with insights and tools that
              enhance visibility, engagement, and growth. With Media Pulse,
              you’re not just getting a service—you’re gaining a team committed
              to driving your success forward.
            </p>
            <Link to="/services">
              <Button variant="primary" className="mt-3">
                Explore Our Services
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
