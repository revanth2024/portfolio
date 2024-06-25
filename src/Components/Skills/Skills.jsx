import React from "react";
import "./Skills.css";
import { Col, Container, Row } from "react-bootstrap";
import htmlicon from "./Images/html.png";
import cssicon from "./Images/css.png";
import javascripticon from "./Images/js.png";
import bootstrapicon from "./Images/bootstrap.png";
import jqueryicon from "./Images/jquery.png";
import sassicon from "./Images/sass.png";
import reacticon from "./Images/react.png";
import reactbooticon from "./Images/react-bootstrap.png";
import materialui from "./Images/mui.png";
import giticon from "./Images/github.png";
import vscodeicon from "./Images/vscode.png";
import figmaicon from "./Images/figma.png";

const Skills = () => {
  const Skillsdata = [
    {
      Icon: htmlicon,
      Name: "HTML",
      Version: "Version  5",
    },
    {
      Icon: cssicon,
      Name: "CSS",
      Version: "Version  3",
    },
    {
      Icon: javascripticon,
      Name: "Javascript",
      Version: "ES2023",
    },
    {
      Icon: bootstrapicon,
      Name: "Bootstrap",
      Version: "Version  5",
    },
    {
      Icon: jqueryicon,
      Name: "jQuery",
      Version: "Version 3.7.1",
    },
    {
      Icon: sassicon,
      Name: "SASS",
      Version: "Version 1.77.6",
    },
    {
      Icon: reacticon,
      Name: "ReactJS",
      Version: "Version 18",
    },
    {
      Icon: reactbooticon,
      Name: "React Bootstrap",
      Version: "Version 2.10.2",
    },
    {
      Icon: materialui,
      Name: "Material Ui",
      Version: "Version 5.2.5",
    },

    {
      Icon: giticon,
      Name: "Git Hub",
      Version: "Current Version",
    },

    {
      Icon: vscodeicon,
      Name: "VS Code",
      Version: "Version 1.65.0",
    },
    {
      Icon: figmaicon,
      Name: "Figma",
      Version: "Version 115",
    },
  ];
  return (
    <>
      <section className="skils-section" id="skills">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="skills-heading">
                <h2>Technical Skills</h2>
                <div className="underline-animation"></div>
              </div>
            </Col>
            <Col>
              <div className="main-flex">
                {Skillsdata.map((data, index) => (
                  <div key={index} className="skill-divison">
                    <img
                      src={data.Icon}
                      alt={`${data.Name} icon`}
                      className="img-fluid"
                    />
                    <p>{data.Name}</p>
                    <div className="before-content">
                      <p>{data.Version}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Skills;
