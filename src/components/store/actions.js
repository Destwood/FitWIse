export const addExcersise = (exercise) => {
  return {
    type: "ADD_EXCERSISE",
    payload: exercise,
  };
};
export const removeExcersise = (exercise) => {
  return {
    type: "REMOVE_EXCERSISE",
    payload: exercise,
  };
};
