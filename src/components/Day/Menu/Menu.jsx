import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Menu.module.scss";
import Item from "./Item/Item";

function Menu({ day, isMenuVisible, onContainerClick }) {
  const data = useSelector((state) => state.trainingPlan.exercise);
  const pushList = data.push || [];
  const pullList = data.pull || [];
  const legList = data.leg || [];
  const [currentList, setCurrentList] = useState(pushList);
  const handleClose = (e) => {
    e.stopPropagation();
    onContainerClick();
  };

  const handleExerciseChange = (list) => {
    setCurrentList(list);
  };

  return (
    <div className={style.popup} onClick={onContainerClick}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        <div className={style.list}>
          {currentList.map((item) => (
            <Item key={item} item={item} day={day} />
          ))}
        </div>
        <div className={style.muscleGroup}>
          <button onClick={() => handleExerciseChange(pushList)}>Push</button>
          <button onClick={() => handleExerciseChange(pullList)}>Pull</button>
          <button onClick={() => handleExerciseChange(legList)}>Leg</button>
        </div>
        <button className={style.close} onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Menu;
