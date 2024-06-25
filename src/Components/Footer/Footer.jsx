import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <Container>
          <Row>
            <Col>
              <p className="footer-content">
                &copy; 2024, Design and Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/revanthravichandran/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Revanth
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Footer;
