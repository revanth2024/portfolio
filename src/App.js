import React, { useEffect } from "react";
import "./App.css";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      // offset: 200,
      easing: "ease-out-cubic",  
      delay: 0,
    });
  }, []);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
