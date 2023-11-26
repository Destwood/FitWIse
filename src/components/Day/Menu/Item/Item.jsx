import React, { useState } from "react";
import style from "./Item.module.scss";
import { useDispatch } from "react-redux";
import { addExcersise } from "../../../store/actions";

function Item({ item, day }) {
  const dispatch = useDispatch();
  const [setsValue, setSetsValue] = useState("");
  const [repsValue, setRepsValue] = useState("");

  const handleAddClick = () => {
    if (item && setsValue && repsValue) {
      const exercise = `${item}: ${setsValue}x${repsValue}`;
      console.log(exercise);
      dispatch(addExcersise({ day, exercise }));
    }
  };

  return (
    <div className={style.item}>
      <div className={style.itemContent}>
        <span className={style.name}>{item}</span>
        <div className={style.inputs}>
          <input
            className={style.reps}
            type="number"
            name="number"
            value={setsValue}
            onChange={(e) => setSetsValue(e.target.value)}
            placeholder="sets"
          />
          <input
            className={style.reps}
            type="number"
            name="number"
            value={repsValue}
            onChange={(e) => setRepsValue(e.target.value)}
            placeholder="reps"
          />
        </div>
      </div>
      <button className={style.add} onClick={handleAddClick}>
        +
      </button>
    </div>
  );
}

export default Item;
