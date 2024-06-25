import React from "react";
import "./Modalcontact.css";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  const { children, ...otherProps } = props;

  return (
    <Slide direction="down" ref={ref} {...otherProps}>
      {children}
    </Slide>
  );
});

const Modalcontact = ({ open, handleClose }) => {
  const contactdetails = [
    {
      img: <BiSolidPhoneCall />,
      details: "+91 - 8056812955",
      link: "tel:8056812955",
    },

    {
      img: <MdMail />,
      details: "revanth2899@gmail.com",
      link: "mailto:revanth2899@gmail.com",
    },
    {
      img: <FaLinkedinIn />,
      details: "revanthravichandran",
      link: "https://www.linkedin.com/in/revanthravichandran/",
    },
  ];

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: {
            width: "100%",
            maxWidth: "500px",
          },
        }}
      >
        <DialogTitle>
          <h3 className="title">Revanth</h3>
          <h5 className="sub-title">"Front-End Developer"</h5>
        </DialogTitle>
        <DialogContent className="bg-color">
          <DialogContentText id="alert-dialog-slide-description">
            {contactdetails.map((data, index) => (
              <div key={index} className="contact-div">
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <span className="icon">{data.img}</span>
                  <p className="data">{data.details}</p>
                </a>
              </div>
            ))}
            <a href="https://www.w3schools.com/" className="cv-button">
              <button>
                <MdDownload />
                Download CV
              </button>
            </a>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default Modalcontact;
