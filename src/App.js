// App.js
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
      duration: 1000,
      offset: 200,
      easing: "ease-in-out-back",
      delay: 0,
      once: true,
    });
  }, []);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
