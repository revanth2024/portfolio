import React from "react";
import "./Career.css";
import { Container, Row, Col } from "react-bootstrap";

import { FaUserShield } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

const Career = () => {
  const careerdata = [
    {
      designation: "Front-End Developer",
      title: "Andril Web Technologies",
      img: <FaUserShield />,
      duration: "1 Year (Sep 2023 - Present)",
      location: "Vadapalani, Chennai.",
    },
    {
      designation: "Web Development Course",
      title: "Web D School",
      img: <FaDev />,
      duration: "5 Months  (Apr 2023 - Aug 2023)",
      location: "Saligramam, Chennai.",
    },
    {
      designation: "B.Sc - Mathematics",
      title: "Sacred Heart College",
      img: <FaGraduationCap />,
      duration: "2017 - 2020",
      location: "Reddiapatti, Dindigul.",
    },
    {
      designation: "Higher Secondary School",
      title: "ICI Govt Boys Hr.Sec School",
      img: <FaSchool />,
      duration: "2015 - 2017",
      location: "Tenkasi.",
    },
    {
      designation: "SSLC",
      title: "ICI Govt Boys Hr.Sec School",
      img: <FaSchool />,
      duration: "2013 - 2015",
      location: "Tenkasi.",
    },
  ];

  return (
    <section className="career-section" id="career">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="career-heading" data-aos="zoom-in-up">
              <h2>Career Journey</h2>
              <div className="underline-animation"></div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-1">
          {careerdata.map((data, index) => (
            <Col
              key={index}
              xl={5}
              lg={5}
              sm={12}
              className="mt-4"
              data-aos="zoom-in"
            >
              <div className="career-item">
                <div className="career-icon">{data.img}</div>
                <div className="career-details">
                  <h4>{data.designation}</h4>
                  <h5>{data.title}</h5>
                  <p>Duration: {data.duration}</p>
                  <p>Location: {data.location}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Career;
