// Day.jsx
import React, { useState } from "react";
import style from "./Day.module.scss";
import Menu from "./Menu/Menu";

function Day({ day, data }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const handleContainerClick = () => {
    setIsMenuVisible(false);
  };

  return (
    <div className={style.day}>
      <h2>{data.name}</h2>
      {day === "monday" && isMenuVisible && (
        <Menu
          day={day}
          isMenuVisible={isMenuVisible}
          onContainerClick={handleContainerClick}
        />
      )}
      <button onClick={toggleMenu}>Відкрити меню</button>
    </div>
  );
}

export default Day;
