import React from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import heroimage from "../Home/Images/banner.png";
import { TiLocationArrow } from "react-icons/ti";
import Social from "./Social";

function Home() {
  return (
    <>
      <section className="hero-section">
        <Container>
          <Row className="align-items-center justify-content-between banner-section">
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="hero-content">
              <h2>
                Hi, I'm <span>Revanth</span>
              </h2>
              <h1>
                I'm a{"  "}
                <span>
                  <Typewriter
                    options={{
                      strings: [
                        "React Developer",
                        "UI Developer",
                        "Front-End Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 0,
                      delay: 50,
                      pauseFor: 1000,
                      cursor: "|",
                    }}
                  />
                </span>
              </h1>

              <p data-aos="fade-up">
                This portfolio showcases my expertise in responsive design,
                HTML, CSS, JavaScript, Bootstrap, jQuery, SASS, ReactJS, and
                other frameworks, demonstrating my proficiency in delivering top
                web development projects.
              </p>
              <a href="mailto:revanth2899@gmail.com" className="main-btn">
                <button>
                  <TiLocationArrow />
                  Hire Me
                </button>
              </a>
              <Social />
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={8}>
              <div className="hero-image">
                <img src={heroimage} alt="banner" fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Home;
