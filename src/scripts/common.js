import { renderTasks } from './renderTasks.js';
import { setItem } from './storage.js';
import { getTasksList } from './tasksGateway.js';

export const readUpdateServerData = (pr) =>
  pr
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
