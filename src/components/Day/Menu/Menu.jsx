import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Menu.module.scss";

function Menu({ day, isMenuVisible, onContainerClick }) {
  const [currentList, setCurrentList] = useState([]);
  const data = useSelector((state) => state.trainingPlan.exercise);
  console.log(currentList);
  const pushList = data.push;
  const pullList = data.pull;
  const legList = data.leg;

  const handleClose = (e) => {
    e.stopPropagation();
    onContainerClick();
  };

  return (
    <div className={style.popup} onClick={onContainerClick}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        <div className={style.muscleGroup}>
          <button
            onClick={() => {
              setCurrentList(pushList);
            }}
          >
            Push
          </button>
          <button
            onClick={() => {
              setCurrentList(pullList);
            }}
          >
            Pull
          </button>
          <button
            onClick={() => {
              setCurrentList(legList);
            }}
          >
            Leg
          </button>
        </div>
        {/* Вміст вашого меню */}
        <div className="">
          {currentList.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        <button className={style.close} onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Menu;
