export default (state = {}, action) => {
  switch (action.type) {
    case "SAVE_TASK_ACTION":
      let oldTasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
      let tasks = [
        ...oldTasks,
        {
          id: Math.round(Math.random() * 100000000000),
          ...action.payload
        }
      ];
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
