import React from "react";
import style from "./Program.module.scss";
import Day from "../Day/Day";
import { useSelector } from "react-redux";

function Program() {
  const days = useSelector((state) => state.trainingPlan.days);
  // Object.entries(days).map(([day, data]) => console.log(day));
  return (
    <div className={style.wrapper}>
      <h1>Програма</h1>
      <div className={style.container}>
        {Object.entries(days).map(([day, data]) =>
          data.exercise.length > 0 ? <Day key={day} day={day} /> : null
        )}
      </div>
    </div>
  );
}

export default Program;
