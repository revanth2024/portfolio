import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import { FaArrowRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import ResumePDF from "../../Common/Resume/Revanth-Resume.pdf";

function About() {
  const Aboutdata = [
    "As a dedicated Front End Developer with over 1 year of experience, I specialize in crafting visually appealing, user-friendly websites. Proficient in HTML, CSS, Bootstrap, jQuery, SASS, and React.js, I build modern, responsive web applications that look great on any device.",
    "I excel at creating seamless user experiences and ensuring cross-browser compatibility and responsiveness using media queries and flexbox/grid layouts.",
  ];
  return (
    <>
      <section className="about-section" id="about">
        <Container>
          <Row className="align-items-center">
            <Col xxl={5} xl={5} lg={5} md={8} sm={12}>
              <div
                className="iframe-container"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="0"
              >
                <iframe
                  title="About-img"
                  src="https://lottie.host/embed/eaca4c6b-f3b9-49bd-b3a1-843600a10d2d/el7Os1W3mt.json"
                ></iframe>{" "}
              </div>
            </Col>
            <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
              <div className="about-content" data-aos="zoom-in-up">
                <h2>About Me</h2>
                <div className="underline-animation"></div>
              </div>
              <div className="about-list">
                <ul>
                  {Aboutdata.map((data, index) => (
                    <li
                      key={index}
                      data-aos="zoom-in-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="0"
                    >
                      <FaArrowRight />
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="personal-detail "
                data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="0"
              >
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
                <a
                  href={ResumePDF}
                  className="contact-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
