export const changeValue = event => {
  return {
    type: "VALUE_CHANGED",
    payload: event.target.value
  };
};
