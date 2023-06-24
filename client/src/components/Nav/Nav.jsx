
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav(props) {
  const { onSearch, setAccess } = props;

  const [activeButton, setActiveButton] = useState("home");

  const handleLogOut = () => {
    setAccess(false);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className={style.container}>
      
      <div  className={style.space}>
      <div>
        <Link to="/home">
          <button
            className={`${style.Button} ${
              activeButton === "home" ? style.activeButton : ""
            }`}
            onClick={() => handleButtonClick("home")}
          >
            Home
          </button>
        </Link>
      </div>


      <div>
        <Link to="/favorites">
          <button
            className={`${style.Button} ${
              activeButton === "favorites" ? style.activeButton : ""
            }`}
            onClick={() => handleButtonClick("favorites")}
          >
            Favorites
          </button>
        </Link>
      </div>

      <div>
        <Link to="/about">
          <button
            className={`${style.Button} ${
              activeButton === "about" ? style.activeButton : ""
            }`}
            onClick={() => handleButtonClick("about")}
          >
            About
          </button>
        </Link>
      </div>

      </div>


      
      <div className={style.spaceMidle}>
        <SearchBar onSearch={onSearch} />
      </div>

      <button className={style.Button} onClick={handleLogOut}>
        Log Out
      </button>

    </div>
  );
}
