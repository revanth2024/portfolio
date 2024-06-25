import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import { FaArrowRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

function About() {
  const Aboutdata = [
    "As a dedicated Front End Web Developer, I specialize in crafting visually appealing, user-friendly websites. Proficient in HTML, CSS, JavaScript, React.js, and Bootstrap, I build modern, responsive web applications that look great on any device. I excel at creating seamless, cross-browser compatible experiences that enhance user engagement and satisfaction.",
  ];
  return (
    <>
      <section className="about-section" id="about">
        <Container>
          <Row className="align-items-center">
            <Col xxl={5} xl={5} lg={5} md={8} sm={12}>
              <div className="iframe-container" data-aos="zoom-in">
                <iframe
                  title="About-img"
                  src="https://lottie.host/embed/eaca4c6b-f3b9-49bd-b3a1-843600a10d2d/el7Os1W3mt.json"
                ></iframe>{" "}
              </div>
            </Col>
            <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
              <div className="about-content">
                <h2>About Me</h2>
                <div className="underline-animation"></div>
              </div>
              <div className="about-list">
                <ul>
                  {Aboutdata.map((data, index) => (
                    <li key={index} data-aos="zoom-in-up">
                      <FaArrowRight />
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="personal-detail " data-aos="zoom-in-up">
                <div className="flex-one">
                  <h5>Name :</h5>
                  <h5>Email :</h5>
                  <h5>Mobile :</h5>
                  <h5>DOB :</h5>
                  <h5>Address :</h5>
                </div>
                <div className="flex-two">
                  <p>Revanth R</p>
                  <p>revanth2899@gmail.com</p>
                  <p>8056812955</p>
                  <p>28.10.1999</p>
                  <p>Kumaran Colony, Vadapalani - Chennai</p>
                </div>
              </div>
              <div>
                <a href="https://www.w3schools.com/" className="contact-btn">
                  <button>
                    <MdDownload />
                    Download CV
                  </button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
