import { combineReducers } from "redux";

const defaultState = {
  exercise: {
    push: [
      "Жим штанги лежачи",
      "Жим гантелей на нахилій лаві",
      "Бабочка на тренажері",
      "Підйом рук в нижньому блоку",
      "Жим для біцепса ізогнутою штангою",
      "Молотки/тяга гантелей для біцепса",
      "Французький жим",
      "Жим гантелей за спиною або в тренажері",
    ],
    pull: [
      "Тяга сидячи в нижньому блоку до пояса",
      "Тяга на тренажері на широку спину",
      "Тяга палкою сидячи в верхньому блоку до рівня підборіддя",
      "Тяга лежачи на животі під кутом 60 градусів",
      "Жим для біцепса ізогнутою штангою",
      "Тяга на біцепс канатом в нижньому блоку",
    ],
    leg: [
      "Присідання зі штангою або в тренажері",
      "Жим платформи ногами",
      "Румунська тяга зі штангою або гантелями",
      "Підняття ніг в тренажері сидячи або рухи, що розводять та зводять ноги",
      "Махи гантелями в бік",
      "Жим гантелей або в тренажері на скам'ях під прямим кутом",
      "Тяга канату в верхньому блоку на задні дельти",
      "Махи однією рукою в нижньому блоку",
    ],
  },

  food: ["Приведи тут список вправ для харчування"],
  days: {
    monday: {
      name: "Понеділок",
      title: "",
      exercise: ["", ""],
      food: {},
    },
    tuesday: {
      name: "Вівторок",
      title: "",
      exercise: ["", ""],
      food: {},
    },
    wednesday: {
      name: "Середа",
      title: "",
      exercise: ["", ""],
      food: {},
    },
    thursday: {
      name: "Четвер",
      title: "",
      exercise: ["", ""],
      food: {},
    },
    friday: {
      name: "П'ятниця",
      title: "",
      exercise: ["", ""],
      food: {},
    },
    saturday: {
      name: "Субота",
      title: "",
      exercise: [],
      food: {},
    },
    sunday: {
      name: "Неділя",
      title: "",
      exercise: [],
      food: {},
    },
  },
};

const ADD_EXCERSISE = "ADD_EXCERSISE";
const REMOVE_EXCERSISE = "REMOVE_EXCERSISE";

const exerciseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_EXCERSISE:
      const { day, exercise } = action.payload;
      const stateToAdd = {
        ...state,
        days: {
          ...state.days,
          [day]: {
            ...state.days[day],
            exercise: [...state.days[day].exercise, exercise],
          },
        },
      };
      return stateToAdd;
    case REMOVE_EXCERSISE:
      const stateToRemove = {
        ...state,
        days: {
          ...state.days,
          [day]: {
            ...state.days[day],
            exercise: [...state.days[day].exercise, exercise],
          },
        },
      };
      return stateToRemove;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  trainingPlan: exerciseReducer,
});

export default rootReducer;
