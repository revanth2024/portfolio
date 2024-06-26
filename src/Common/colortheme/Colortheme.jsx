import React, { useEffect, useState } from "react";
import "./Colortheme.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";

const Colortheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className="theme-icon">
      {theme === "light" ? (
        <BsMoonStarsFill />
      ) : (
        <IoSunnyOutline className="dark-icon" />
      )}
    </button>
  );
};

export default Colortheme;
