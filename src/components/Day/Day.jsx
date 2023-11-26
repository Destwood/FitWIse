import React, { useState } from "react";
import style from "./Day.module.scss";
import Menu from "./Menu/Menu";

import { useSelector } from "react-redux";

function Day({ day }) {
  const data = useSelector((state) => state.trainingPlan.days[day]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const dayName = data.name;
  const dayExercise = data.exercise;
  console.log(dayExercise);
  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const handleContainerClick = () => {
    setIsMenuVisible(false);
  };

  return (
    <div className={style.day}>
      <h2>{dayName}</h2>
      <ul className={style.exerciseList}>
        {dayExercise.map((item) => (
          <li className={style.exerciseItem} key={item}>
            {item}
          </li>
        ))}
      </ul>
      {isMenuVisible && (
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
