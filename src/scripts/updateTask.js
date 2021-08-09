import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';

export const changeStatusHandler = (event) => {
  if (!event.target.dataset.taskId) return;
  const tasksList = getItem('tasksList');
  const newTasksList = tasksList.map((task) => {
    if (task.id === Number(event.target.dataset.taskId)) {
      const done = event.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });

  setItem('tasksList', newTasksList);
  renderTasks();
};
