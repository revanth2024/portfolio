import React, { useRef } from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5w2eg9h",
        "template_4o66foh",
        formRef.current,
        "0rDS12dou2aLUaPK-"
      )
      .then(
        (result) => {
          toast.success("Thanks for Contacting Me", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: { color: "black" },
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact-section">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="contact-heading">
                <h2>Contact Me</h2>
                <div className="underline-animation"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={8} className="mx-auto">
              <Box
                ref={formRef}
                onSubmit={sendEmail}
                className="form-div"
                component="form"
                autoComplete="off"
                sx={{
                  "& .MuiTextField-root": {
                    marginBottom: "10px",
                    width: "100%",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "var(--text-color)",
                    },
                  },
                }}
              >
                <div className="form-flex">
                  <TextField
                    id="outlined-basic-name"
                    label="Your Name"
                    variant="outlined"
                    name="from_name"
                  />
                  <TextField
                    id="outlined-basic-email"
                    label="Your Email"
                    variant="outlined"
                    name="from_email"
                  />
                </div>
                <div className="form-flex">
                  <TextField
                    id="outlined-basic-mobile"
                    label="Mobile Number"
                    variant="outlined"
                    name="mobile_number"
                    type="number"
                    className="no-spinner"
                  />
                  <TextField
                    id="outlined-basic-subject"
                    label="Your Subject"
                    variant="outlined"
                    name="your_subject"
                  />
                </div>
                <TextField
                  id="outlined-multiline-message"
                  label="Your Messages"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="message"
                />
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </Box>
            </Col>
          </Row>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </Container>
      </section>
    </>
  );
}

export default Contact;
