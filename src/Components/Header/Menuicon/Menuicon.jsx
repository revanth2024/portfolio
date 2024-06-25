import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Menuicon.css";

const Menuicon = ({ handleToggle, isOpen }) => {
  return (
    <>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={handleToggle}
      >
        <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
          <div className="line-menu first-line"></div>
          <div className="line-menu"></div>
          <div className="line-menu last-line"></div>
        </div>
      </Navbar.Toggle>
    </>
  );
};
export default Menuicon;
