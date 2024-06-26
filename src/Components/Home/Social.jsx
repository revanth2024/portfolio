import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

import "./Home.css";

const Social = () => {
  return (
    <>
      <div className="social-link" data-aos="fade-up">
        <Tooltip title="Git-hub" arrow>
          <a
            href="https://github.com/revanth2024"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <IoLogoGithub />
          </a>
        </Tooltip>
        <Tooltip title="Linkedin" arrow>
          <a
            href="https://www.linkedin.com/in/revanthravichandran/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <BiLogoLinkedin />
          </a>{" "}
        </Tooltip>
        <Tooltip title="Mail" arrow>
          <a
            href="mailto:revanth2899@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <IoMail />
          </a>{" "}
        </Tooltip>

        <Tooltip title="Whatsapp" arrow>
          <a
            href="https://wa.me/8056812955"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <MdOutlineWhatsapp />
          </a>{" "}
        </Tooltip>
      </div>
    </>
  );
};
export default Social;
