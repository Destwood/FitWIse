import React, { useState } from "react";
import style from "./Item.module.scss";
import { useDispatch } from "react-redux";
import { addExcersise } from "../../../store/actions";

function Item({ item, day }) {
  const dispatch = useDispatch();
  const [setsValue, setSetsValue] = useState("");
  const [repsValue, setRepsValue] = useState("");

  const handleAddClick = () => {
    if (item && setsValue >= 0 && repsValue >= 0) {
      const exercise = `${item}: ${setsValue}x${repsValue}`;
      console.log(exercise);
      dispatch(addExcersise({ day, exercise }));
    }
  };

  const handleSetsIncrement = () => {
    if (setsValue === "") {
      setSetsValue(1);
    } else {
      setSetsValue((prevValue) => prevValue + 1);
    }
  };

  const handleSetsDecrement = () => {
    if (setsValue > 0) {
      if (setsValue === 1) {
        setSetsValue("");
      } else {
        setSetsValue((prevValue) => prevValue - 1);
      }
    }
  };

  const handleRepsIncrement = () => {
    if (repsValue === "") {
      setRepsValue(1);
    } else {
      setRepsValue((prevValue) => prevValue + 1);
    }
  };

  const handleRepsDecrement = () => {
    if (repsValue > 0) {
      if (repsValue === 1) {
        setRepsValue("");
      } else {
        setRepsValue((prevValue) => prevValue - 1);
      }
    }
  };

  return (
    <div className={style.item}>
      <div className={style.itemContent}>
        <span className={style.name}>{item}</span>
        <div className={style.inputs}>
          <div className={style.inputContainer}>
            <button className={style.inputChange} onClick={handleSetsDecrement}>
              -
            </button>
            <input
              className={style.inputField}
              type="text"
              name="number"
              value={setsValue}
              onChange={(e) => setSetsValue(parseInt(e.target.value))}
              placeholder="sets"
            />
            <button className={style.inputChange} onClick={handleSetsIncrement}>
              +
            </button>
          </div>
          <div className={style.inputContainer}>
            <button className={style.inputChange} onClick={handleRepsDecrement}>
              -
            </button>
            <input
              className={style.inputField}
              type="text"
              name="number"
              value={repsValue}
              onChange={(e) => setRepsValue(parseInt(e.target.value))}
              placeholder="reps"
            />
            <button className={style.inputChange} onClick={handleRepsIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
      <button className={style.add} onClick={handleAddClick}>
        +
      </button>
    </div>
  );
}

export default Item;
