import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Projects.css";

import { GiStarShuriken } from "react-icons/gi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import banner01 from "./Images/banner1/banner1.png";
import banner02 from "./Images/banner2/banner1.png";
import banner03 from "./Images/banner3/banner1.png";
import banner04 from "./Images/banner4/banner1.png";
import banner05 from "./Images/banner5/banner1.png";
import banner06 from "./Images/banner6/banner1.png";

import html from "./Images/html.png";
import css from "./Images/css.png";
import javascript from "./Images/js.png";
import jquery from "./Images/jquery.png";
import bootstrap from "./Images/bootstrap.png";
import react from "./Images/react.png";
import reactboot from "./Images/react-bootstrap.png";
import mui from "./Images/mui.png";
import sass from "./Images/sass.png";
import php from "./Images/php.png";

import modalimage01 from "./Images/banner1/banner1.png";
import modalimage02 from "./Images/banner1/banner2.png";
import modalimage03 from "./Images/banner1/banner3.png";

import modalsecondimg1 from "./Images/banner2/banner1.png";
import modalsecondimg2 from "./Images/banner2/banner2.png";
import modalsecondimg3 from "./Images/banner2/banner3.png";
import modalsecondimg4 from "./Images/banner2/banner4.png";
import modalsecondimg5 from "./Images/banner2/banner5.png";

import modalthirdimg1 from "./Images/banner3/banner1.png";
import modalthirdimg2 from "./Images/banner3/banner2.png";
import modalthirdimg3 from "./Images/banner3/banner3.png";
import modalthirdimg4 from "./Images/banner3/banner4.png";
import modalthirdimg5 from "./Images/banner3/banner5.png";

import modalfourthimg1 from "./Images/banner4/banner1.png";
import modalfourthimg2 from "./Images/banner4/banner2.png";
import modalfourthimg3 from "./Images/banner4/banner3.png";

import modalfifthimg1 from "./Images/banner5/banner1.png";
import modalfifthimg2 from "./Images/banner5/banner2.png";
import modalfifthimg3 from "./Images/banner5/banner3.png";
import modalfifthimg4 from "./Images/banner5/banner4.png";
import modalfifthimg5 from "./Images/banner5/banner5.png";
import modalfifthimg6 from "./Images/banner5/banner6.png";

import modalsixthimg1 from "./Images/banner6/banner1.png";
import modalsixthimg2 from "./Images/banner6/banner2.png";
import modalsixthimg3 from "./Images/banner6/banner3.png";

const Projects = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "800px",
    height: "85%",
    overflowY: "scroll",
    bgcolor: "background.paper",
    boxShadow: 10,
    padding: 7,
    background:
      "linear-gradient(90deg, rgb(1, 32, 68) 0%, rgb(0, 79, 125) 50%, rgba(0, 30, 63, 1) 100%)",
    borderRadius: "8px",
    outline: "0",
    padding: "37px",
  };

  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleOpen = (project) => {
    setCurrentProject(project);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentProject(null);
  };

  const projectdata = [
    {
      name: "Camera Ecommerce Webiste",
      technology: "React Website",
      img: banner02,
      tools: [html, sass, react, mui, javascript, reactboot],
      url: "https://revanth2024.github.io/camera-ecommerce/",
      sliderImg: [
        modalsecondimg1,
        modalsecondimg2,
        modalsecondimg3,
        modalsecondimg4,
        modalsecondimg5,
      ],
      description: [
        "Our camera E-commerce website offers a seamless shopping experience for photography enthusiasts of all levels. Featuring a user-friendly interface, our site allows customers to easily browse and add products to their cart.",
        "Explore, shop, and enjoy capturing moments with ease on our camera   e-commerce platform.",
        "Customers can explore our extensive range of cameras, lenses, accessories, and more. Once satisfied with their selection, they can view their chosen items in the cart, where detailed price breakdowns are clearly displayed.",
        "Ordering is straightforward, with secure checkout options and various payment methods available to suit individual preferences.",
        "Whether you're a professional photographer or a hobbyist looking to upgrade your gear, our website is designed to cater to your needs efficiently and effectively",
      ],
    },

    {
      name: "Instagram Chatting App    ",
      technology: "React Website",
      img: banner01,
      tools: [html, sass, react, mui, reactboot],
      url: "https://revanth2024.github.io/instagram-chatapp/",
      sliderImg: [modalimage01, modalimage02, modalimage03],
      description: [
        "Instagram's chatting app offers a sleek and versatile platform for communication with a range of user-friendly features.",
        "Users can seamlessly add, change, and delete messages, ensuring fluid interactions. The app supports both dark and light themes, catering to various preferences and environments.",
        "The interface includes a responsive sidebar, enhancing navigation and accessibility across devices. This sidebar adapts smoothly to different screen sizes, maintaining usability whether on a smartphone, tablet, or desktop.",
        "Overall, Instagram's chatting app combines aesthetic design with practical functionality to optimize user experience in messaging.",
      ],
    },

    {
      name: "JCCorporation Website",
      technology: "HTML Website",
      img: banner03,
      tools: [html, css, javascript, bootstrap, jquery],
      url: "https://jccorporations.com/",
      sliderImg: [
        modalthirdimg1,
        modalthirdimg2,
        modalthirdimg3,
        modalthirdimg4,
        modalthirdimg5,
      ],
      description: [
        "JCCorporation is a prominent IT services company known for its leadership in providing comprehensive IT solutions.",
        "Specializing in staff augmentation, JCCorporation excels in meeting diverse client needs by supplying skilled professionals for various IT roles.",
        "Their commitment extends beyond mere staffing; they emphasize job assurance, ensuring that their placements not only meet current project demands but also contribute to long-term career growth and stability for their employees.",
        "JCCorporation's reputation as a leading IT services provider is underscored by their dedication to delivering high-quality personnel and securing job opportunities that align with both client expectations and employee aspirations.",
      ],
    },

    {
      name: "Doctor At Home  Website Template",
      technology: "HTML Website",
      img: banner04,
      tools: [html, css, javascript, bootstrap, jquery, php],
      url: "https://doctorathome.org/",
      sliderImg: [modalfourthimg1, modalfourthimg2, modalfourthimg3],
      description: [
        "The Doctor at Home website provides specialized services in wound dressing and bed sore care through its Special Geriatrics Care Unit.",
        "This unit is equipped with 10 beds and offers intensive care focused on wound management and bed sore prevention and treatment.",
        "In addition to these services, the facility provides comprehensive healthcare support including physiotherapy sessions, chest X-ray examinations, and ECG (electrocardiogram) diagnostics. This ensures a holistic approach to medical care, addressing both acute and chronic health needs for patients in need of specialized attention.",
      ],
    },

    {
      name: "Santa Event Management Website",
      technology: "HTML Website",
      img: banner05,
      tools: [html, css, javascript, bootstrap, jquery, php],
      url: "https://santaeventmanagement.com/",
      sliderImg: [
        modalfifthimg1,
        modalfifthimg2,
        modalfifthimg3,
        modalfifthimg4,
        modalfifthimg5,
        modalfifthimg6,
      ],
      description: [
        "The Sanda Event Management website is designed to offer comprehensive event management services, leveraging modern web technologies to create an engaging and visually appealing user experience.",
        " A dynamic display of core services including Exhibitions, Roadshows, New Product Launches, Advertising, Seminars & Conferences, and Sound & Lights.",
        "A contact form connected to a PHP server for handling inquiries and requests.",
        "An animated map showing the company's location with AOS and GSAP-enhanced effects.",
        "The Sanda Event Management website is designed to be user-friendly, with intuitive navigation and visually appealing animations. The use of AOS and GSAP ensures that users remain engaged while exploring the services and capabilities of Sanda Event Management.",
        "The Sanda Event Management website effectively combines aesthetic appeal with functionality, utilizing advanced animation libraries and robust backend support to provide a seamless and engaging user experience.",
      ],
    },

    {
      name: "Global CC Hospital Template",
      technology: "HTML Website",
      img: banner06,
      tools: [html, css, javascript, bootstrap, jquery, php],
      url: "https://www.gcchospitals.com/",
      sliderImg: [modalsixthimg1, modalsixthimg2, modalsixthimg3],
      description: [
        "Global Critical Care Hospital is committed to providing top-notch healthcare services in a user-friendly and accessible manner. Our website is designed to connect you seamlessly to our world-class facilities and expert medical care",
        "This website is structured to provide easy navigation through multiple pages, each dedicated to different aspects of our services and facilities.",
        "This website leverages PHP to create a dynamic and interactive experience, ensuring real-time updates and seamless performance.",
        "Visit our website to learn more about our services, meet our medical team, and access a wealth of information designed to support your health journey.",
      ],
    },
  ];

  return (
    <>
      <section className="project-section" id="project">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="project-heading">
                <h2>Masterpiece Projects</h2>
                <div className="underline-animation"></div>
              </div>
            </Col>
            <Col xxl={12}>
              <Swiper
                slidesPerView={2}
                spaceBetween={40}
                grabCursor={true}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
              >
                {projectdata.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div className="project-slide">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="project-img"
                        onClick={() => handleOpen(data)}
                      />
                      <div className="project-details">
                        <h4>{data.name}</h4>
                        <span>{data.technology}</span>
                      </div>
                      <div className="tools-section">
                        {data.tools.map((tool, Index) => (
                          <img
                            key={Index}
                            src={tool}
                            width={"100%"}
                            alt={`Tool ${Index}`}
                          />
                        ))}
                      </div>

                      <div className="details-section">
                        <button
                          className="description"
                          onClick={() => handleOpen(data)}
                        >
                          Description Overview
                        </button>
                        <a
                          href={data.url}
                          className="live-url"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>View Live</button>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>

        {/* POPUP  */}
        {currentProject && (
          <Modal
            open={open}
            onClose={handleClose}
            BackdropProps={{
              style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
              onClick: (event) => event.stopPropagation(),
            }}
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                sx={{ position: "relative", top: 10 }}
              >
                <h4 className="des-heading">{currentProject.name}</h4>
              </Typography>

              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  color: "white",
                }}
              >
                <CloseIcon />
              </IconButton>

              <Swiper
                slidesPerView={1}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {currentProject.sliderImg.map((swipeimg, index) => (
                  <SwiperSlide key={index} className="popup-img">
                    <img
                      src={swipeimg}
                      width={"100%"}
                      alt={currentProject.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Typography id="modal-modal-title">
                <h5 className="des-title">Description :</h5>
              </Typography>

              {currentProject.description.map((content, Index) => (
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  key={Index}
                >
                  <GiStarShuriken />
                  <span className="des-content">{content}</span>
                </Typography>
              ))}
              <a
                href={currentProject.url}
                className="live-url-modal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View Live</button>
              </a>
            </Box>
          </Modal>
        )}
      </section>
    </>
  );
};

export default Projects;
