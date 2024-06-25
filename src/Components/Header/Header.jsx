import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Images/logo.png";
import "./Header.css";
import Menuicon from "./Menuicon/Menuicon";
import Divider from "@mui/material/Divider";
import { MdOutlineContactPage } from "react-icons/md";
import Modalcontact from "../../Common/Modalcontact/Modalcontact";

const Header = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (index) => {
    setActiveIndex(index);
    setIsOpen(false);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Navdata = [
    {
      menu: "Home",
      url: "/",
      
    },
    {
      menu: "About",
      url: "/#about",
    },
    {
      menu: "Skills",
      url: "/#skills",
    },
    {
      menu: "Project",
      url: "/#project",
    },
    {
      menu: "Career",
      url: "/#career",
    },
  ];

  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="main-header">
        <Container>
          <Navbar.Brand href="/" className="logo">
            <img src={logo} alt="logo" fluid />
            <h4>Portfolio</h4>
          </Navbar.Brand>
          <Menuicon handleToggle={handleToggle} isOpen={isOpen} />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={isOpen ? "show" : ""}
          >
            <Nav className="ms-auto" >
              {Navdata.map((data, index) => (
                <Nav.Link
                  href={data.url}
                  key={index}
                  eventKey={index}
                  smooth
                  active={index === activeIndex}
                  onClick={() => handleNavLinkClick(index)}
                >
                  {data.menu}
                </Nav.Link>
              ))}
              <Divider
                sx={{
                  height: 30,
                  m: 0,
                  width: "1px",
                  border: "1px solid white",
                  display: {
                    xs: "none",
                    md: "none",
                    sm: "none",
                    lg: "block",
                  },
                }}
                orientation="vertical"
              />
              <span className="contact-btn" onClick={handleClickOpen}>
                <button>
                  <MdOutlineContactPage />
                  Contact Me
                </button>
                <span className="circle"></span>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modalcontact open={open} handleClose={handleClose} />
    </>
  );
};

export default Header;
