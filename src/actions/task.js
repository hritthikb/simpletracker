export const saveTask = data => dispatch =>
  dispatch({
    type: "SAVE_TASK_ACTION",
    payload: data
  });

export const updateTask = data => dispatch =>
  dispatch({
    type: "UPDATE_TASK_ACTION",
    payload: data
  });
